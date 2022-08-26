import AppDataSource from "../../database/data-source";
import { Repository } from "typeorm";
import { UserEntity } from "../../entities/UserEntity";
import { IUserRepository } from "../IUserRepository";
import { CreateUserDTO } from "../../dtos/users/CreateUserDTO";

export class UserRepository implements IUserRepository {
	private repository: Repository<UserEntity>;

	constructor() {
		this.repository = AppDataSource.getRepository(UserEntity);
	}

	getAllUsers = async () => {
		const users = await this.repository.find();

		return users;
	};

	save = async (CreateUserDTO: CreateUserDTO) => {
		return this.repository.save(CreateUserDTO);
	};

	// public async getById(id: UserEntity) {}

	// public async update({ name, email, password }: UserRequest): Promise<UserEntity> {}

	// public async delete(id: UserEntity) {}
}
