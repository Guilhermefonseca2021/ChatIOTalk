import { Router } from "express"
import { Home } from "../controllers/homeController"

const routes = Router()

routes.get("/", Home)

export default routes