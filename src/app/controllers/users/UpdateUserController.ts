import { Request, Response } from "express";
import { UserRepository } from "../../repositories/implementations/UserRepository";
import { UpdateUserService } from "../../services/users/UpdateUserService";

export class UpdateUserController {
	async handle(req: Request, res: Response): Promise<Response> {
		const repository = new UserRepository();
		const service = new UpdateUserService(repository);

		const data = req.body;
		const { id } = req.params;

		try {
			await service.execute(id, data);

			return res.status(201).json({ message: "User updated success" });
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}
