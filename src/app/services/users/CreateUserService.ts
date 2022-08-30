import { UserEntity } from "../../entities/UserEntity";
import { IUserRepository } from "../../repositories/IUserRepository";
import { CreateUserDTO } from "../../dtos/users/CreateUserDTO";
import { hash } from "bcryptjs";
import { Exception } from "../../errors/Exception";

export class CreateUserService {
	constructor(private repository: IUserRepository) {}

	async execute(data: CreateUserDTO) {
		try {
			const userExists = await this.repository.findByEmail(data.email);

			if (userExists) throw new Exception("User already exists.", 401);

			const passwordHash = await hash(data.password, 8);

			const user = new UserEntity(data.name, data.email, passwordHash);

			await this.repository.create(user);

			return;
		} catch {
			throw new Exception("Internal server error", 500);
		}
	}
}
