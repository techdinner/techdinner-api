import AppDataSource from "../../../../database/data-source";
import { Repository } from "typeorm";
import { UserEntity } from "../../../entities/UserEntity";
import { IUserRepository } from "../../IUserRepository";

export class TypeORMUserRepository implements IUserRepository {
	constructor(private entity: Repository<UserEntity>) {
		this.entity = AppDataSource.getRepository(UserEntity);
	}

	async findByEmail(email: string): Promise<UserEntity> {
		return await this.entity.findOneOrFail({ where: { email } });
	}

	async getAllUsers(): Promise<UserEntity[]> {
		return await this.entity.find();
	}

	async create(user: UserEntity): Promise<void> {
		await this.entity.create(user);

		return;
	}

	async getById(id: string): Promise<UserEntity> {
		return await this.entity.findOneByOrFail({ id });
	}
}
