import { User } from "@entities/User";
import { CreateUser } from "@usecases/users/CreateUser";
import { CreateUserRepository } from "@repositories/users/CreateUserRepository";
import { FindUserByEmailRepository } from "@repositories/users/FindUserByEmailRepository";
import { CreateUserDTO } from "@dtos/users/CreateUserDTO";

export class CreateUserService implements CreateUser {
	constructor(
		private readonly createUserRepository: CreateUserRepository,
		private readonly findUserByEmailRepository: FindUserByEmailRepository,
	) {}

	async execute(data: CreateUserDTO): Promise<void> {
		const user = await this.findUserByEmailRepository.findByEmail(data.email);

		if (user) throw new Error("User already exists.");

		const newUser = new User(
			data.name,
			data.email,
			data.cpf,
			data.phone,
			data.company_id,
			data.photo,
		);

		await this.createUserRepository.create(newUser);
	}
}
