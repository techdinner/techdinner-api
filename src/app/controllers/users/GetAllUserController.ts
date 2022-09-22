import { Controller } from "../../interfaces/Controller";
import { GetAllUserService } from "../../services/users/GetAllUserService";

export class GetAllUserController implements Controller {
	constructor(private readonly getAllUserService: GetAllUserService) {}

	async handle() {
		const response = await this.getAllUserService.execute();
		return response;
	}
}
