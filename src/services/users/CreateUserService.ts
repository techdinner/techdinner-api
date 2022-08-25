import { UserRepository } from "../../repositories/UserRepository";

export class CreateUserService {
	async execute() {
		const repository = new UserRepository();

		const user = repository.saveUser();

		return user;
	}
}
