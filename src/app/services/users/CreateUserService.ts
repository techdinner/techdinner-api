import { User } from "../../entities/User";
import { CreateUserRepository } from "../../repositories/users/CreateUserRepository";
import { CreateUserDTO } from "../../dtos/users/CreateUserDTO";

export class CreateUserService {
	constructor(private readonly repository: CreateUserRepository) {}

	async execute(data: CreateUserDTO) {
		// const userExists = await this.repository.findByEmail(data.email);

		// if (userExists) throw new Error("User already exists.");

		const user = new User(data.name, data.email, data.role);

		await this.repository.create(user);
	}
}
