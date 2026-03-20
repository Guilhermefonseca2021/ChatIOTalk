import express from "express";
import path from "node:path";
import routes from "./routes/routes";
import ejs from "ejs";
import { Server } from "socket.io";
import http from "http";
import cookieParser from "cookie-parser";
import session from "express-session";
import helmet from "helmet";
import contactRoutes from "./routes/contactRoutes";
import authenticator from "./middlewares/authenticator";
import { notFound } from "./middlewares/notFound";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();
const server = http.createServer(app); // servidor
const io = new Server(server); // conecta socket ao servidor

// middlewares
app.use(helmet());
app.use(cookieParser());
app.use(
  session({
    secret: "minha-chave-secreta",
    resave: false,
    saveUninitialized: false,
  }),
);

// view engine
app.set("views", path.resolve(process.cwd(), "src", "views"));
app.engine("html", ejs.renderFile);
app.set("view engine", "html");

// body parser
app.use(express.urlencoded({ extended: true }));

// rotas
app.use(routes);
app.use(authenticator, contactRoutes);

// 404 SEMPRE POR ÚLTIMO
app.use(notFound);
app.use(errorHandler);

// SOCKET.IO
io.on("connection", (socket) => {
  console.log("🔌 Cliente conectado");

  socket.on("disconnect", () => {
    console.log("❌ Cliente desconectado");
  });
});

io.sockets.on("connection", function (client) {
  client.on("send-server", function (data) {
    var msg = "<b>" + data.nome + ":</b> " + data.msg + "<br>";
    client.emit("send-client", msg);
    client.broadcast.emit("send-client", msg);
  });
});

// servidor
server.listen(3000, () => {
  console.log("\x1b[36m Servidor rodando na porta 3000 💻 \x1b[0m");
});
