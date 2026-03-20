import { Router } from "express";
import {
  Contact,
  createContact,
  showContact,
  editContact,
  getUserContact,
  updateContact,
  destroyContact,
} from "../controllers/contactController";

const contactRoutes = Router();

contactRoutes.get("/contacts", Contact);
contactRoutes.get("/contacts/:id", showContact);
contactRoutes.post("/contacts", createContact);
contactRoutes.get("/contacts/:id/detalhes", getUserContact);
contactRoutes.get("/contacts/:id/editar", editContact);
contactRoutes.put("/contacts/:id", updateContact);
contactRoutes.delete("/contacts/:id", destroyContact);

export default contactRoutes;
