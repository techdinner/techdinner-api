import { UserRepository } from "../../repositories/implementations/UserRepository";
import { IUserRepository } from "../../repositories/IUserRepository";
import { CreateUserDTO } from "../../dtos/users/CreateUserDTO";
import { hash } from "bcryptjs";

export class CreateUserService {
	private repository: IUserRepository;

	constructor(repository: UserRepository) {
		this.repository = repository;
	}

	execute = async ({ name, email, password }: CreateUserDTO) => {
		const passwordHash = await hash(password, 8);

		const user = await this.repository.create({
			name,
			email,
			password: passwordHash,
		});

		return user;
	};
}
