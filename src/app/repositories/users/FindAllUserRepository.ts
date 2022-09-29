import { User } from "@entities/User";

export interface FindAllUserRepository {
	findAllUsers(): Promise<User[] | undefined>;
}
