import AppDataSource from "../../database/data-source";
import { Repository } from "typeorm";
import { UserEntity } from "../../entities/UserEntity";
import { IUserRepository } from "../IUserRepository";
import { CreateUserDTO } from "../../dtos/users/CreateUserDTO";

export class UserRepository implements IUserRepository {
	private entity: Repository<UserEntity>;

	constructor() {
		this.entity = AppDataSource.getRepository(UserEntity);
	}

	getAllUsers = async (): Promise<UserEntity[]> => {
		const users = await this.entity.find();

		return users;
	};

	create = async ({
		name,
		email,
		password,
	}: CreateUserDTO): Promise<UserEntity> => {
		const user = this.entity.create({
			name,
			email,
			password,
		});

		await this.entity.save(user);

		return user;
	};

	getById = async (id: number): Promise<UserEntity | null> => {
		const user = await this.entity.findOneByOrFail({ id });

		return user;
	};
}
