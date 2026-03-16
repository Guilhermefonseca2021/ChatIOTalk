import { Request, Response } from "express";

export function Contact(req: Request, res: Response) {
  let user = req.session.username || null;
 
  res.render("contact", {
    username: { name: user },
  });
}
  