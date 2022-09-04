import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/IUserRepository";
import { UpdateUserDTO } from "../../dtos/users/UpdateUserDTO";
import { hash } from "bcryptjs";

export class UpdateUserService {
	constructor(private repository: IUserRepository) {}

	async execute(id: string, data: UpdateUserDTO) {
		const passwordHash = await hash(data.password, 8);

		const user = new User(
			data.name,
			data.email,
			passwordHash,
			data?.active,
			data?.role,
		);

		await this.repository.update(id, user);
	}
}
