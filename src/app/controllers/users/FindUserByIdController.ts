import { Request, Response } from "express";
import { Controller } from "../../interfaces/controller";
import { FindUserByIdService } from "../../services/users/FindUserByIdService";

export class FindUserByIdController implements Controller {
	constructor(private readonly findUserByIdService: FindUserByIdService) {}

	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const { id } = req.params;

			const response = await this.findUserByIdService.execute(id);

			return res.status(200).json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}
