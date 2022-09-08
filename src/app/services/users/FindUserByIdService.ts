import { FindUserByIdRepository } from "../../repositories/users/FindUserByIdRepository";

export class FindUserByIdService {
	constructor(private readonly repository: FindUserByIdRepository) {}

	async execute(id: string) {
		return await this.repository.findById(id);
	}
}
