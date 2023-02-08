import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

export const authenticate = (
  req: Request,
  _: Response,
  next: NextFunction,
): void => {
  const header = req.headers.authorization;

  if (!header) throw new Error("JWT token is missing!");

  const [, token] = header.split(" ");

  try {
    verify(token, String(process.env.APP_SECRET));
    next();
  } catch {
    throw new Error("JWT token is invalid!");
  }
};