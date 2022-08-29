import { IUserRepository } from "../../repositories/IUserRepository";

export class GetAllUserService {
	constructor(private repository: IUserRepository) {}

	execute = async () => {
		return await this.repository.getAllUsers();
	};
}
