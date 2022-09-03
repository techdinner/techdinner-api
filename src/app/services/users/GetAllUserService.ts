import { UserRepository } from "../../repositories/UserRepository";

export class GetAllUserService {
	constructor(private repository: UserRepository) {}

	async execute() {
		return await this.repository.getAllUsers();
	}
}
