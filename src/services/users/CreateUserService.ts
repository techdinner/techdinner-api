import { IUserRepository } from "../../repositories/IUserRepository";
import { CreateUserDTO } from "../../dtos/users/CreateUserDTO";
import { hash } from "bcryptjs";
import { Exception } from "../../errors/Exception";

export class CreateUserService {
	constructor(private repository: IUserRepository) {}

	execute = async (data: CreateUserDTO) => {
		const userExists = await this.repository.findByEmail(data.email);

		if (userExists) throw new Exception("User already exists.", 401);

		const passwordHash = await hash(data.password, 8);

		data.password = passwordHash;

		await this.repository.create(data);
	};
}
