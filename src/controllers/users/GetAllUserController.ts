import { Request, Response } from "express";
import { GetAllUserService } from "../../services/users/GetAllUserService";

export class GetAllUserController {
	async handle(req: Request, res: Response) {
		const service = new GetAllUserService();

		const users = await service.execute();

		return res.status(200).json(users);
	}
}
