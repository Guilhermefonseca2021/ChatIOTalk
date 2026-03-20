import { Request, Response } from "express";

export function Contact(req: Request, res: Response) {
  const userSession = req.session.user;

  const user = {
    name: userSession?.name ?? "",
    contacts: Array.isArray(userSession?.contacts) ? userSession.contacts : [],
  };

  res.render("contacts", { user });
}

export function getUserContact(req: Request, res: Response) {
  const usuario = req.session.user || null;
  const contatos = usuario?.contatos || [];

  const params = {
    usuario,
    contatos,
  };

  res.render("contacts", params);
}

export function showContact(req: Request, res: Response) {
  const ParamsId = Number(req.params.id);

  const user = req.session.user;

  if (!user || !Array.isArray(user.contacts)) {
    return res.send("Usuário ou contatos inválidos");
  }

  const contact = user.contacts[ParamsId];

  if (!contact) {
    return res.render("erro", { error: "Contato não encontrado" });
  }

  const params = {
    contact,
    id: ParamsId,
  };

  console.log(params);

  res.render("show", params);
}

export function createContact(req: Request, res: Response) {
  let contact = req.body.contact || {
    name: req.body.name,
    email: req.body.email,
  };

  if (!req.session.user) {
    req.session.user = {
      name: "Usuário",
      email: "teste@email.com",
      contacts: [],
    };
  }

  if (!Array.isArray(req.session.user.contacts)) {
    req.session.user.contacts = [];
  }

  req.session.user.contacts.push(contact);

  console.log(req.session.user);

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
