import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/IUserRepository";
import { CreateUserDTO } from "../../dtos/users/CreateUserDTO";
import { hash } from "bcryptjs";

export class CreateUserService {
	constructor(private repository: IUserRepository) {}

	async execute(data: CreateUserDTO) {
		// const userExists = await this.repository.findByEmail(data.email);

		// if (userExists) throw new Error("User already exists.");

		//const passwordHash = await hash(data.password, 8);

		const user = new User(data.name, data.email, data.role); //passwordHash);

		await this.repository.create(user);
	}
}
