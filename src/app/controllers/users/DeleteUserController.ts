import { Request, Response } from "express";
import { Controller } from "../../interfaces/controller";
import { DeleteUserService } from "../../services/users/DeleteUserService";

export class DeleteUserController implements Controller {
	constructor(private readonly deleteUserService: DeleteUserService) {}

	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const { id } = req.params;

			const response = await this.deleteUserService.execute(id);

			return res.status(200).json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}
