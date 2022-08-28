import { Request, Response } from "express";
import { AuthService } from "../../services/auth/AuthService";
import { TypeORMUserRepository } from "../../repositories/implementations/typeorm/TypeORMUserRepository";

export class AuthController {
	handle = async (req: Request, res: Response): Promise<Response> => {
		try {
			const { email, password } = req.body;

			const repository = new TypeORMUserRepository();
			const service = new AuthService(repository);

			const response = await service.execute({
				email,
				password,
			});

			return res.status(200).json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	};
}
