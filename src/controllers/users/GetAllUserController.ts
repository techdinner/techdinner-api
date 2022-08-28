import { Request, Response } from "express";
import { TypeORMUserRepository } from "../../repositories/implementations/typeorm/TypeORMUserRepository";
import { GetAllUserService } from "../../services/users/GetAllUserService";

export class GetAllUserController {
	handle = async (req: Request, res: Response): Promise<Response> => {
		try {
			const repository = new TypeORMUserRepository();
			const service = new GetAllUserService(repository);

			const users = await service.execute();

			return res.status(200).json(users);
		} catch (error) {
			return res.status(500).json(error);
		}
	};
}
