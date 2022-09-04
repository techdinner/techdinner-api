import { IUserRepository } from "../../repositories/IUserRepository";

export class GetAllUserService {
	constructor(private repository: IUserRepository) {}

	async execute() {
		return await this.repository.getAllUsers();
	}
}
