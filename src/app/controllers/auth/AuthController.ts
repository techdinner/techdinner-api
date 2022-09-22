import { Controller } from "../../interfaces/Controller";
import { AuthService } from "../../services/auth/AuthService";

export class AuthController implements Controller {
	constructor(private readonly authService: AuthService) {}

	async handle(req: any) {
		const { email, password } = req.body;

		const response = await this.authService.execute({
			email,
			password,
		});

		return response;
	}
}
