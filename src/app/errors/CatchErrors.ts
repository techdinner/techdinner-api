import { NextFunction, Request, Response } from "express";
import "express-async-errors";
import { Exception } from "./Exception";

export const CatchErrors = (
	err: Error,
	req: Request,
	res: Response,
	_: NextFunction,
) => {
	if (err instanceof Exception)
		return res
			.status(err.status)
			.json({ status: "error", message: err.message });

	return res
		.status(500)
		.json({ status: "error", message: "Internal server error." });
};
