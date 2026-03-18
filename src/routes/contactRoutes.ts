import { Router } from "express";
import {
  Contact,
  createContact,
  showContact,
  editContact,
//   getUserContact,
  updateContact,
  destroyContact,
} from "../controllers/contactController";

const contactRoutes = Router();

contactRoutes.get("/contacts", Contact);
contactRoutes.get("/contato/:id", showContact);
contactRoutes.post("/contato", createContact);
contactRoutes.get("/contato/:id/editar", editContact);
contactRoutes.put("/contato/:id", updateContact);
contactRoutes.delete("/contato/:id", destroyContact);

export default contactRoutes;
