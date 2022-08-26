import AppDataSource from "../../database/data-source";
import { Repository } from "typeorm";
import { UserEntity } from "../../entities/UserEntity";
import { IUserRepository, UserTypes } from "../IUserRepository";

export class UserRepository implements IUserRepository {
	private repository: Repository<UserEntity>;

	constructor() {
		this.repository = AppDataSource.getRepository(UserEntity);
	}

	public async getAllUsers(): Promise<UserEntity> {
		// const users = await repository.find();
		const users = [
			{
				name: "Matheus",
			},
			{
				name: "Thony",
			},
		];

		return users;
	}

	public async save({ name, email, password }: UserTypes): Promise<void> {}

	// public async getById(id: UserEntity) {}

	// public async update({ name, email, password }: UserRequest): Promise<UserEntity> {}

	// public async delete(id: UserEntity) {}
}
