import { Controller } from "../../interfaces/Controller";
import { UpdateUserService } from "../../services/users/UpdateUserService";

export class UpdateUserController implements Controller {
	constructor(private readonly updateUserService: UpdateUserService) {}

	async handle(req: any) {
		const data = req.body;
		const { id } = req.params;

		await this.updateUserService.execute(id, data);
	}
}
