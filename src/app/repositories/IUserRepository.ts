import { UserEntity } from "../entities/UserEntity";

export interface IUserRepository {
	findByEmail(email: string): Promise<UserEntity>;
	getAllUsers(): Promise<UserEntity[]>;
	create(user: UserEntity): Promise<void>;
	getById(id: string): Promise<UserEntity>;
}
