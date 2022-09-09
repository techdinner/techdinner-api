import { User } from "../../entities/User";
import { FindUserByIdRepository } from "../../repositories/users/FindUserByIdRepository";

export class FindUserByIdService {
	constructor(
		private readonly findUserByIdRepository: FindUserByIdRepository,
	) {}

	async execute(id: string): Promise<User | undefined> {
		return await this.findUserByIdRepository.findById(id);
	}
}
