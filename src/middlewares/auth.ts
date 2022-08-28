import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { Exception } from "../errors/Exception";

export const authenticate = (
	req: Request,
	res: Response,
	next: NextFunction,
): Promise<any> | void => {
	const header = req.headers.authorization;

	if (!header) throw new Exception("JWT token is missing!", 401);

	const [, token] = header.split(" ");

	try {
		verify(token, String(process.env.APP_SECRET));
		next();
	} catch {
		throw new Exception("JWT token is invalid!", 401);
	}
};
