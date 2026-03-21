import { Request, Response } from "express";

export function chatController(req: Request, res: Response) {
  res.render("chat", {
    email: req.params.email,
    user: req.session.user || {}, 
  });
}
