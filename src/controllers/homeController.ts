import { Request, Response } from "express";

export function Home(req: Request, res: Response) {
  res.render("home");
  console.table();
}

export function login(req: Request, res: Response) {
  const { username } = req.body;

  if (username?.name && username?.email) {

    req.session.username = username.name;

    res.render("contact", {
      username: { name: req.session.username }
    });

    return;
  }

  res.send("Erro no login");
}

export function logout(req: Request, res: Response) {
  req.session.destroy(() => {
    res.redirect("/");
  });
}
