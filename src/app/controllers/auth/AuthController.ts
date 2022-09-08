import { Request, Response } from "express";
import { AuthService } from "../../services/auth/AuthService";

export class AuthController {
	constructor(private readonly service: AuthService) {}

	async handle(req: Request, res: Response): Promise<Response> {
		const { email, password } = req.body;

		try {
			const response = await this.service.execute({
				email,
				password,
			});

			return res.status(200).json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}
