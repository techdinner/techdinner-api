import { Controller } from "../../interfaces/Controller";
import { FindUserByIdService } from "../../services/users/FindUserByIdService";

export class FindUserByIdController implements Controller {
	constructor(private readonly findUserByIdService: FindUserByIdService) {}

	async handle(req: any) {
		const { id } = req.params;

		const response = await this.findUserByIdService.execute(id);

		return response;
	}
}
