import { User } from "@entities/User";
import { FindUserById } from "@usecases/users/FindUserById";
import { FindUserByIdRepository } from "@repositories/users/FindUserByIdRepository";

export class FindUserByIdService implements FindUserById {
	constructor(
		private readonly findUserByIdRepository: FindUserByIdRepository,
	) {}

	async execute(id: string): Promise<User | undefined> {
		return await this.findUserByIdRepository.findById(id);
	}
}
