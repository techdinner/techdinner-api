import { Controller } from "@interfaces/Controller";
import { HttpResponseBuilder } from "@builders/HttpResponseBuilder";
import { DeleteUser } from "@usecases/users/DeleteUser";

export class DeleteUserController implements Controller {
	constructor(private readonly deleteUser: DeleteUser) {}

	async handle(request: any) {
		const { id } = request.params;

		const response = await this.deleteUser.execute(id);

		return HttpResponseBuilder.statusCode(200).body(response).build();
	}
}
