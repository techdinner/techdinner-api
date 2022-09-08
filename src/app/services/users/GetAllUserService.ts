import { GetAllUserRepository } from "../../repositories/users/GetAllUserRepository";

export class GetAllUserService {
	constructor(private readonly repository: GetAllUserRepository) {}

	async execute() {
		return await this.repository.getAllUsers();
	}
}
