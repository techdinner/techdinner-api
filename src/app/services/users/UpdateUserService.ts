import { UpdateUserRepository } from "../../repositories/users/UpdateUserRepository";
import { UpdateUserDTO } from "../../dtos/users/UpdateUserDTO";
import { hash } from "bcryptjs";

export class UpdateUserService {
	constructor(private readonly updateUserRepository: UpdateUserRepository) {}

	async execute(id: string, data: UpdateUserDTO): Promise<void> {
		const objectValuesRaw = Object.values(data).join("");
		const somethingWillUpdate = objectValuesRaw !== "";

		if (somethingWillUpdate) {
			if (data?.password) {
				//encrypt the password
				data.password = await hash(data.password, 8);
			}
			await this.updateUserRepository.update(id, data);
		}
	}
}
