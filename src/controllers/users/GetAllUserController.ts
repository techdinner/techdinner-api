import { Request, Response } from "express";
import { GetAllUserService } from "../../services/users/GetAllUserService";

export class GetAllUserController {
	private service: GetAllUserService;

	constructor(service: GetAllUserService) {
		this.service = service;
	}

	handle = async (req: Request, res: Response) => {
		try {
			const response = await this.service.execute();

			return res.status(200).json(response);
		} catch (error) {
			console.log(error);
		}
	};
}
