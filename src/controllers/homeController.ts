import { Request, Response } from "express"

export function Home(req: Request, res: Response) {
  res.render("home")
}