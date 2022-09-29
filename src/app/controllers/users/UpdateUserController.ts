import { Controller } from "@interfaces/Controller";
import { HttpResponseBuilder } from "@builders/HttpResponseBuilder";
import { UpdateUser } from "@usecases/users/UpdateUser";

export class UpdateUserController implements Controller {
	constructor(private readonly updateUser: UpdateUser) {}

	async handle(request: any) {
		const data = request.body;
		const { id } = request.params;

		await this.updateUser.execute(id, data);

		return HttpResponseBuilder.statusCode(200)
			.body({ message: "User updated" })
			.build();
	}
}
