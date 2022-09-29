import { Controller } from "@interfaces/Controller";
import { HttpResponseBuilder } from "@builders/HttpResponseBuilder";
import { CreateUser } from "@usecases/users/CreateUser";

export class CreateUserController implements Controller {
	constructor(private readonly createUser: CreateUser) {}

	async handle(request: any) {
		const { name, email, role } = request.body;

		await this.createUser.execute({
			name,
			email,
			role,
		});

		return HttpResponseBuilder.statusCode(200)
			.body({ message: "User created" })
			.build();
	}
}
