import { Controller } from "../../interfaces/Controller";
import { CreateUserService } from "../../services/users/CreateUserService";

export class CreateUserController implements Controller {
	constructor(private readonly createUserService: CreateUserService) {}

	async handle(req: any) {
		const { name, email, role } = req.body;

		await this.createUserService.execute({
			name,
			email,
			role,
		});
	}
}
