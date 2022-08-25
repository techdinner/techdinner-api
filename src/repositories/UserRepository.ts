import AppDataSource from "../database/data-source";
import { UserEntity } from "../entities/UserEntity";

const repository = AppDataSource.getRepository(UserEntity);

type UserRequest = {
	name: string;
	email: string;
	password: string;
};

export class UserRepository {
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

	async saveUser({ name, email, password }: UserRequest): Promise<UserEntity> {
		const user = repository.create({
			name,
			email,
			password,
		});

		await repository.save(user);

		return user;
	}
}
