import { User } from "@entities/User";
import { CreateUser } from "@usecases/users/CreateUser";
import { CreateUserRepository } from "@repositories/users/CreateUserRepository";
import { CreateUserDTO } from "@dtos/users/CreateUserDTO";

export class CreateUserService implements CreateUser {
	constructor(private readonly createUserRepository: CreateUserRepository) {}

	async execute(data: CreateUserDTO): Promise<void> {
		// const userExists = await this.repository.findByEmail(data.email);

		// if (userExists) throw new Error("User already exists.");

		const user = new User(data.name, data.email, data.role);

		await this.createUserRepository.create(user);
	}
}
