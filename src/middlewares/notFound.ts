import { Request, Response, NextFunction } from "express";

export function notFound(req: Request, res: Response, next: NextFunction) {
  res.status(404);

  if (req.headers.accept?.includes("application/json")) {
    return res.json({
      error: "Not Found",
      message: "Endpoint não existe",
    });
  }

  return res.render("404");
}