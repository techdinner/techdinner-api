import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors/AppError";

export const authenticate = (
	req: Request,
	res: Response,
	next: NextFunction,
): Promise<any> | void => {
	const header = req.headers.authorization;

	if (!header) throw new AppError("JWT token is missing!", 401);

	const [, token] = header.split(" ");

	try {
		verify(token, String(process.env.APP_SECRET));
		next();
	} catch {
		throw new AppError("JWT token is invalid!", 401);
	}
};
