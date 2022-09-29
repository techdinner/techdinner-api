import { User } from "@entities/User";
import { FindAllUser } from "@usecases/users/FindAllUser";
import { FindAllUserRepository } from "@repositories/users/FindAllUserRepository";

export class FindAllUserService implements FindAllUser {
	constructor(private readonly findAllUserRepository: FindAllUserRepository) {}

	async execute(): Promise<User[] | undefined> {
		return await this.findAllUserRepository.findAllUsers();
	}
}
