import { UserRepository } from "../../repositories/UserRepository";

export class GetAllUserService {
	async execute() {
		const repository = new UserRepository();

		const data = repository.getAllUsers();

		return data;
	}
}
