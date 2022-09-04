import { Request, Response } from "express";
import { UserRepository } from "../../repositories/implementations/UserRepository";
import { AuthService } from "../../services/auth/AuthService";

export class AuthController {
	async handle(req: Request, res: Response): Promise<Response> {
		const repository = new UserRepository();
		const service = new AuthService(repository);

		const { email, password } = req.body;

		try {
			const response = await service.execute({
				email,
				password,
			});

			return res.status(200).json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}
