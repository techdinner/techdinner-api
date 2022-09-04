import { IUserRepository } from "../../repositories/IUserRepository";

export class DeleteUserService {
	constructor(private repository: IUserRepository) {}

	async execute(id: string) {
		return await this.repository.delete(id);
	}
}
