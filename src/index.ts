import express from "express"
import path from "node:path"
import routes from "./routes/routes"
import ejs from "ejs"

const app = express()

app.set("views", path.resolve(process.cwd(), "src", "views"))
app.engine("html", ejs.renderFile)
app.set("view engine", "html")

app.use(routes)

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000")
})