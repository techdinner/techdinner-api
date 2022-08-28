import AppDataSource from "../../../database/data-source";
import { Repository } from "typeorm";
import { UserEntity } from "../../../entities/UserEntity";
import { IUserRepository } from "../../IUserRepository";
import { CreateUserDTO } from "../../../dtos/users/CreateUserDTO";

export class TypeORMUserRepository implements IUserRepository {
	private entity: Repository<UserEntity>;

	constructor() {
		this.entity = AppDataSource.getRepository(UserEntity);
	}

	findByEmail = async (email: string): Promise<UserEntity | null> => {
		const user = await this.entity.findOneOrFail({ where: { email } });

		return user;
	};

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
}
