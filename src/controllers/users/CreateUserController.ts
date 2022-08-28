import { Request, Response } from "express";
import { TypeORMUserRepository } from "../../repositories/implementations/typeorm/TypeORMUserRepository";
import { CreateUserService } from "../../services/users/CreateUserService";

export class CreatUserController {
	handle = async (req: Request, res: Response): Promise<Response> => {
		try {
			const { name, email, password } = req.body;

			const repository = new TypeORMUserRepository();
			const service = new CreateUserService(repository);

			const user = await service.execute({
				name,
				email,
				password,
			});

			const data = { name, email };

			return res.status(201).json(data);
		} catch (error) {
			return res.status(500).json(error);
		}
	};
}
