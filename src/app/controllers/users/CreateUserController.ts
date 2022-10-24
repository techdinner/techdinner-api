import { Controller } from "@interfaces/Controller";
import { HttpResponseBuilder } from "@builders/HttpResponseBuilder";
import { CreateUser } from "@usecases/users/CreateUser";

export class CreateUserController implements Controller {
	constructor(private readonly createUser: CreateUser) {}

	async handle(request: any) {
		await this.createUser.execute({ ...request });

		return HttpResponseBuilder.statusCode(201)
			.body({ message: "User created" })
			.build();
	}
}
