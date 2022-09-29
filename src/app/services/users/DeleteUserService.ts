import { DeleteUser } from "@usecases/users/DeleteUser";
import { DeleteUserRepository } from "@repositories/users/DeleteUserRepository";

export class DeleteUserService implements DeleteUser {
	constructor(private readonly deleteUserRepository: DeleteUserRepository) {}

	async execute(id: string): Promise<void> {
		return await this.deleteUserRepository.delete(id);
	}
}
