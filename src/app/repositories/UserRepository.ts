import { UserEntity } from "../entities/UserEntity";

export interface UserRepository {
	findByEmail(email: string): Promise<UserEntity | null>;
	getAllUsers(): Promise<UserEntity[]>;
	create(user: UserEntity): Promise<void>;
	getById(id: string): Promise<UserEntity | null>;
}
