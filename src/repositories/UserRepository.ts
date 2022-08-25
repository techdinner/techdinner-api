import AppDataSource from "../database/data-source";
import { UserEntity } from "../entities/UserEntity";

type UserRequest = {
	name?: string;
	email: string;
	password: string;
};

export class UserRepository {
	private repository;

	constructor() {
		this.repository = AppDataSource.getRepository(UserEntity);
	}

	async getAllUsers() {
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

	async save({ name, email, password }: UserRequest): Promise<UserEntity> {
		const user = new UserEntity();

		// const user = repository.create({
		// 	name,
		// 	email,
		// 	password,
		// });

		await this.repository.save(user);

		return user;
	}

	async getById(id: UserEntity) {
		const user = await this.repository.findOneByOrFail(id);

		return user;
	}

	// async update({
	// 	name,
	// 	email,
	// 	password,
	// }: UserRequest): Promise<UserEntity> {
	// 	const user = repository.update({
	// 		name,
	// 		email,
	// 		password,
	// 	});

	// 	return user;
	// }

	async delete(id: UserEntity) {
		const user = await this.repository.findOneByOrFail(id);

		const result = await this.repository.delete(user);

		return result;
	}
}
