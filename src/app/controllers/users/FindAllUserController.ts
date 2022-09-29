import { Controller } from "@interfaces/Controller";
import { HttpResponseBuilder } from "@builders/HttpResponseBuilder";
import { FindAllUser } from "@usecases/users/FindAllUser";

export class FindAllUserController implements Controller {
	constructor(private readonly findAllUser: FindAllUser) {}

	async handle() {
		const response = await this.findAllUser.execute();

		return HttpResponseBuilder.statusCode(200).body(response).build();
	}
}
