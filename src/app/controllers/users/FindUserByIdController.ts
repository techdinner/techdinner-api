import { Controller } from "@interfaces/Controller";
import { HttpResponseBuilder } from "@builders/HttpResponseBuilder";
import { FindUserById } from "@usecases/users/FindUserById";

export class FindUserByIdController implements Controller {
	constructor(private readonly findUserById: FindUserById) {}

	async handle(request: any) {
		const { id } = request.params;

		const response = await this.findUserById.execute(id);

		return HttpResponseBuilder.statusCode(200).body(response).build();
	}
}
