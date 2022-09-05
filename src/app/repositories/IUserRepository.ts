import { User } from "../entities/User";

export interface IUserRepository {
	findByEmail(email: string): Promise<User | undefined>;
	getAllUsers(): Promise<User[] | undefined>;
	create(user: User): Promise<void>;
	findById(id: string): Promise<User | undefined>;
	update(id: string, user: User): Promise<void>;
	delete(id: string): Promise<void>;
}
