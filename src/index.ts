import express from "express";
import path from "node:path";
import routes from "./routes/routes";
import ejs from "ejs";
import cookieParser from "cookie-parser";
import session from "express-session";
import helmet from "helmet";
import contactRoutes from "./routes/contactRoutes";

const app = express();

app.use(helmet());
app.use(cookieParser());
app.use(
  session({
    secret: "minha-chave-secreta",
    resave: false,
    saveUninitialized: false,
  }),
);

app.set("views", path.resolve(process.cwd(), "src", "views"));
app.engine("html", ejs.renderFile);
app.set("view engine", "html");

app.use(express.urlencoded({ extended: true })); 
app.use(routes);
app.use(contactRoutes)

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
