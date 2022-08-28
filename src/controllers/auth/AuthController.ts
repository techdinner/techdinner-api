import { Request, Response } from "express";
import { AuthService } from "../../services/auth/AuthService";
import { TypeORMUserRepository } from "../../repositories/implementations/typeorm/TypeORMUserRepository";

export class AuthController {
	handle = async (req: Request, res: Response): Promise<Response> => {
		const { email, password } = req.body;

		const repository = new TypeORMUserRepository();
		const service = new AuthService(repository);

		const auth = await service.execute({
			email,
			password,
		});

		return res.json(auth);
	};
}
