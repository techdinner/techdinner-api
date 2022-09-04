import { Request, Response } from "express";
import { UserRepository } from "../../repositories/implementations/UserRepository";
import { CreateUserService } from "../../services/users/CreateUserService";

export class CreateUserController {
	async handle(req: Request, res: Response): Promise<Response> {
		const repository = new UserRepository();
		const service = new CreateUserService(repository);

		const { name, email, password } = req.body;

		try {
			await service.execute({
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
