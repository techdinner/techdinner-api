import { IUserRepository } from "../../repositories/IUserRepository";

export class FindUserByIdService {
	constructor(private repository: IUserRepository) {}

	async execute(id: string) {
		return await this.repository.findById(id);
	}
}
