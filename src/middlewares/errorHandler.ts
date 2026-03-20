import { Request, Response, NextFunction } from "express";

export function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error("🔥 ERROR:", err);

  const status = err.status || 500;

  res.status(status);

  if (req.headers.accept?.includes("application/json")) {
    return res.json({
      error: "Internal Server Error",
      message: err.message || "Algo deu errado",
    });
  }

  return res.render("erro", {
    error: err.message,
  });
}