import { Controller } from "../../interfaces/Controller";
import { DeleteUserService } from "../../services/users/DeleteUserService";

export class DeleteUserController implements Controller {
	constructor(private readonly deleteUserService: DeleteUserService) {}

	async handle(req: any) {
		const { id } = req.params;

		const response = await this.deleteUserService.execute(id);

		return response;
	}
}
