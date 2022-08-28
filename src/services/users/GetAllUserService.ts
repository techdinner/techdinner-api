import { TypeORMUserRepository } from "../../repositories/implementations/typeorm/TypeORMUserRepository";
import { IUserRepository } from "../../repositories/IUserRepository";

export class GetAllUserService {
	private repository: IUserRepository;

	constructor(repository: TypeORMUserRepository) {
		this.repository = repository;
	}

	execute = async () => {
		const users = await this.repository.getAllUsers();

		return users;
	};
}
