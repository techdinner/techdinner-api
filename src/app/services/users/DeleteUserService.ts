import { DeleteUserRepository } from "../../repositories/users/DeleteUserRepository";

export class DeleteUserService {
	constructor(private readonly deleteUserRepository: DeleteUserRepository) {}

	async execute(id: string): Promise<void> {
		return await this.deleteUserRepository.delete(id);
	}
}
