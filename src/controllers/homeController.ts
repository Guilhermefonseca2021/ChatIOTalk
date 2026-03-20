import { Request, Response } from "express";

export function Home(req: Request, res: Response) {
  res.render("home");
}

export function login(req: Request, res: Response) {
  const { user } = req.body;

  if (user?.name && user?.email) {
    let createdUser = req.session.user = {
      name: user.name,
      email: user.email,
      contacts: [],
    };

    res.render("contacts", {
      user: req.session.user,
    });
    console.table(createdUser);
    return;
  }

  res.send("Erro no login");
}

export function logout(req: Request, res: Response) {
  req.session.destroy(() => {
    res.redirect("/");
  });
}
