import { NextFunction, Request, Response } from "express";

export default function authenticator(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (!req.session.user) {
    return res.redirect("/");
  }

  next();
}
