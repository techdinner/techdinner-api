import { Request, Response } from "express";
import { Controller } from "../../interfaces/controller";
import { GetAllUserService } from "../../services/users/GetAllUserService";

export class GetAllUserController implements Controller {
	constructor(private readonly getAllUserService: GetAllUserService) {}

	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const response = await this.getAllUserService.execute();
			return res.status(200).json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}
