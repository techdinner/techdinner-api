import { Request, Response } from "express";

export class UserController {
	async getAllUsers(req: Request, res: Response) {
		try {
			const data = [
				{
					name: "Matheus",
				},
				{
					name: "Thony",
				},
			];

			return res.status(200).json(data);
		} catch (error) {
			console.log(error);
			return res.status(500).json({ message: "Internal Sever Error" });
		}
	}
}
