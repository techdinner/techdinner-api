import { Request, Response } from "express";

export class UserController {
	async getAll(req: Request, res: Response) {
		try {
			return res.status(200).json();
		} catch (error) {
			console.log(error);
			return res.status(500).json({ message: "Internal Sever Error" });
		}
	}
}
