import { Request, Response } from "express";
import { CreateUserService } from "../../services/users/CreateUserService";

export class CreateUserController {
	constructor(private readonly service: CreateUserService) {}

	async handle(req: Request, res: Response): Promise<Response> {
		const { name, email, role } = req.body;

		try {
			await this.service.execute({
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
