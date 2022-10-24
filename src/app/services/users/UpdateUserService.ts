import { UpdateUserRepository } from "@repositories/users/UpdateUserRepository";
import { UpdateUserDTO } from "@dtos/users/UpdateUserDTO";
import { UpdateUser } from "@usecases/users/UpdateUser";
import { HashRepository } from "@repositories/crypt/HashRepository";

export class UpdateUserService implements UpdateUser {
	constructor(
		private readonly updateUserRepository: UpdateUserRepository,
		private hashRepository: HashRepository,
	) {}

	async execute(id: string, data: UpdateUserDTO): Promise<void> {
		const objectValuesRaw = Object.values(data).join("");
		const somethingWillUpdate = objectValuesRaw !== "";

		if (somethingWillUpdate) {
			if (data?.password) {
				data.password = await this.hashRepository.hash(data.password);
			}
			await this.updateUserRepository.update(id, data);
		}
	}
}
