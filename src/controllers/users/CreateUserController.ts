import { Request, Response } from "express";
import { CreateUserService } from "../../services/users/CreateUserService";

export class CreatUserController {
	async handle(req: Request, res: Response) {
		const { name, email, password } = req.body;

		const service = new CreateUserService();

		const user = await service.execute({ name, email, password });

		return res.status(200).json(user);
	}
}
