import { Request, Response } from "express";
import { GetAllUserService } from "../../services/users/GetAllUserService";

export class GetAllUserController {
	constructor(private service: GetAllUserService) {}

	handle = async (req: Request, res: Response) => {
		try {
			const response = await this.service.execute();

			return res.status(200).json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	};
}
