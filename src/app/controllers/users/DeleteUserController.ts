import { Request, Response } from "express";
import { DeleteUserService } from "../../services/users/DeleteUserService";

export class DeleteUserController {
	constructor(private service: DeleteUserService) {}

	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const { id } = req.params;

			const response = await this.service.execute(id);

			return res.status(200).json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}
