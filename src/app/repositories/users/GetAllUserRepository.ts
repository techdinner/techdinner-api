import { User } from "../../../domain/entities/User";

export interface GetAllUserRepository {
	getAllUsers: () => Promise<User[] | undefined>;
}
