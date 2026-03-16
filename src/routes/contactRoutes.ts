import { Router } from "express";
import { Contact } from "../controllers/contactController";

const contactRoutes = Router();

contactRoutes.get("/contacts", Contact);
// contactRoutes.get('/contatos', index);
// contactRoutes.get('/contato/:id', show);
// contactRoutes.post('/contato', create);
// contactRoutes.get('/contato/:id/editar', edit);
// contactRoutes.put('/contato/:id', update);
// contactRoutes.delete('/contato/:id', destroy);


export default contactRoutes;