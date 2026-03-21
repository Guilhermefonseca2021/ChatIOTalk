import { Router } from "express";
import { chatController } from "../controllers/chatController";

const chatRoutes = Router();

chatRoutes.get("/chat/:email", chatController);

export default chatRoutes;