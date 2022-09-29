import { UpdateUserRepository } from "@repositories/users/UpdateUserRepository";
import { UpdateUserDTO } from "@dtos/users/UpdateUserDTO";
import { hash } from "bcryptjs";
import { UpdateUser } from "@usecases/users/UpdateUser";

export class UpdateUserService implements UpdateUser {
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
