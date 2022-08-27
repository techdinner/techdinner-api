import { UserRepository } from "../../repositories/implementations/UserRepository";
import { IUserRepository } from "../../repositories/IUserRepository";

export class GetAllUserService {
	private repository: IUserRepository;

	constructor(repository: UserRepository) {
		this.repository = repository;
	}

	execute = async () => {
		const users = await this.repository.getAllUsers();

		return users;
	};
}
