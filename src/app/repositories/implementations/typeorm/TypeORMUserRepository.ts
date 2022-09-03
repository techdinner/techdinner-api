import AppDataSource from "../../../../database/data-source";
import { Repository } from "typeorm";
import { User } from "../../../models/User";
import { UserEntity } from "../../../entities/UserEntity";
import { UserRepository } from "../../UserRepository";

export class TypeORMUserRepository implements UserRepository {
	constructor(protected model: Repository<User>) {
		this.model = AppDataSource.getRepository(User);
	}

	async findByEmail(email: string): Promise<UserEntity | null> {
		return await this.model.findOne({ where: { email } });
	}

	async getAllUsers(): Promise<UserEntity[]> {
		return await this.model.find();
	}

	async create(user: UserEntity): Promise<void> {
		await this.model.create(user);

		return;
	}

	async getById(id: string): Promise<UserEntity | null> {
		return await this.model.findOneBy({ id });
	}
}
