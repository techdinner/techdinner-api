import { Request, Response } from "express";
import { UserRepository } from "../../repositories/implementations/UserRepository";
import { DeleteUserService } from "../../services/users/DeleteUserService";

export class DeleteUserController {
	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const repository = new UserRepository();
			const service = new DeleteUserService(repository);

			const { id } = req.params;

			const response = await service.execute(id);

			return res.status(200).json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}
