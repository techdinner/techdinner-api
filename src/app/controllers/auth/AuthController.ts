import { Request, Response } from "express";
import { Controller } from "../../interfaces/controller";
import { AuthService } from "../../services/auth/AuthService";

export class AuthController implements Controller {
	constructor(private readonly authService: AuthService) {}

	async handle(req: Request, res: Response): Promise<Response> {
		const { email, password } = req.body;

		try {
			const response = await this.authService.execute({
				email,
				password,
			});

			return res.status(200).json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}
