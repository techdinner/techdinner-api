import { Request, Response } from "express";
import { UserRepository } from "../../repositories/implementations/UserRepository";
import { GetAllUserService } from "../../services/users/GetAllUserService";

export class GetAllUserController {
	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const repository = new UserRepository();
			const service = new GetAllUserService(repository);

			const response = await service.execute();

			return res.status(200).json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}
