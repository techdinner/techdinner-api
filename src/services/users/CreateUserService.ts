import { UserRepository } from "../../repositories/implementations/UserRepository";

export class CreateUserService {
	async execute() {
		const repository = new UserRepository();

		const user = repository.save();

		return user;
	}
}
