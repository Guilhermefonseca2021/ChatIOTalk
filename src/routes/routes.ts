import { Router } from "express";
import { Home, login, logout } from "../controllers/homeController";

const routes = Router();

routes.get("/", Home);
routes.post("/login", login);
routes.post("/logout", logout);

export default routes;
