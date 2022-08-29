import AppDataSource from "../../../database/typeorm/data-source";
import { Repository } from "typeorm";
import { TypeORMUserEntity } from "../../../entities/typeorm/TypeORMUserEntity";
import { IUserRepository } from "../../IUserRepository";

export class TypeORMUserRepository implements IUserRepository {
	constructor(private entity: Repository<TypeORMUserEntity>) {
		this.entity = AppDataSource.getRepository(TypeORMUserEntity);
	}

	findByEmail = async (email: string): Promise<TypeORMUserEntity> => {
		return await this.entity.findOneOrFail({ where: { email } });
	};

	getAllUsers = async (): Promise<TypeORMUserEntity[]> => {
		return await this.entity.find();
	};

	create = async (user: TypeORMUserEntity): Promise<void> => {
		await this.entity.create(user);

		return;
	};

	getById = async (id: number): Promise<TypeORMUserEntity> => {
		return await this.entity.findOneByOrFail({ id });
	};
}
