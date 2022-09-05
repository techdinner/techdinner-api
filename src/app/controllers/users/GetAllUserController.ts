import e, { Request, Response } from "express";
import { GetAllUserService } from "../../services/users/GetAllUserService";

export class GetAllUserController {
	constructor(private service: GetAllUserService) {}

	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const response = await this.service.execute();
			return res.status(200).json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}
