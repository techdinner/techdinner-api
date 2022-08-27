import { Request, Response } from "express";
import { AuthService } from "../../services/auth/AuthService";
import { UserRepository } from "../../repositories/implementations/UserRepository";

export class AuthController {
	handle = async (req: Request, res: Response): Promise<Response> => {
		const { email, password } = req.body;

		const repository = new UserRepository();
		const service = new AuthService(repository);

		const auth = await service.execute({
			email,
			password,
		});

		return res.json(auth);
	};
}
