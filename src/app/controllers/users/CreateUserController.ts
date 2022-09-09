import { Request, Response } from "express";
import { Controller } from "../../interfaces/controller";
import { CreateUserService } from "../../services/users/CreateUserService";

export class CreateUserController implements Controller {
	constructor(private readonly createUserService: CreateUserService) {}

	async handle(req: Request, res: Response): Promise<Response> {
		const { name, email, role } = req.body;

		try {
			await this.createUserService.execute({
				name,
				email,
				role,
			});

			return res.status(201).json({ message: "User created success" });
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}
