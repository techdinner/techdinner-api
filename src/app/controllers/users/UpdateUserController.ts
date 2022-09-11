import { Request, Response } from "express";
import { Controller } from "../../interfaces/controller";
import { UpdateUserService } from "../../services/users/UpdateUserService";

export class UpdateUserController implements Controller {
	constructor(private readonly updateUserService: UpdateUserService) {}

	async handle(req: Request, res: Response): Promise<Response> {
		const data = req.body;
		const { id } = req.params;

		try {
			await this.updateUserService.execute(id, data);
			return res.status(201).json({ message: "User updated success" });
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}
