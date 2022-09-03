import { Request, Response } from "express";
import { CreateUserService } from "../../services/users/CreateUserService";

export class CreateUserController {
	constructor(private service: CreateUserService) {}

	async handle(req: Request, res: Response) {
		const { name, email, password } = req.body;

		try {
			await this.service.execute({
				name,
				email,
				password,
			});

			return res.status(201).json({ message: "User created success" });
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}
