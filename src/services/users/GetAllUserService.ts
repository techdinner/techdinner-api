import { IUserRepository } from "../../repositories/IUserRepository";

export class GetAllUserService {
	private repository: IUserRepository;

	constructor(repository: IUserRepository) {
		this.repository = repository;
	}

	execute = async () => {
		const data = await this.repository.getAllUsers();

		return data;
	};
}
