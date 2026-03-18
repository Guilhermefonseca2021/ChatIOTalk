import { Request, Response } from "express";

export function Contact(req: Request, res: Response) {
  const userSession = req.session.user;

  const user = {
    name: userSession?.name ?? "",
    contacts: Array.isArray(userSession?.contacts) ? userSession.contacts : [],
  };

  res.render("contact", { user });
}

export function getUserContact(req: Request, res: Response) {
  const usuario = req.session.user || null;
  const contatos = usuario?.contatos || [];

  const params = {
    usuario,
    contatos,
  };

  res.render("contatos/index", params);
}

export function showContact(req: Request, res: Response) {
  let ParamsId = req.params.ParamsId;
  let contact = req.session.user.contacts[ParamsId];

  const params = {
    contact,
    id: ParamsId,
  };

  res.render("contacts/show", params);
}

export function createContact(req: Request, res: Response) {
  let contact = req.body.contact;
  let users = req.session.user || null;
  users.contacts.push(contact);
  res.redirect("/contacts");
}

export function editContact(req: Request, res: Response) {
  let ParamsId = req.params.ParamsId;
  let user = req.session.user || null;
  let contact = user.contacts[ParamsId];

  const params = {
    user: { user: user, contact: contact, id: ParamsId },
  };
  res.render("contacts/edit", params);
}

export function updateContact(req: Request, res: Response) {
  let contact = req.body.contact;
  let user = req.session.user || null;
  let Paramsid = req.params.id;

  user.contacts[Paramsid] = contact;
  res.redirect("/contacts");
}

export function destroyContact(req: Request, res: Response) {
  let user = req.session.user || null;
  let Paramsid = req.params.id;
  user.contacts.splice(Paramsid, 1);
  res.redirect("/contacts");
}
