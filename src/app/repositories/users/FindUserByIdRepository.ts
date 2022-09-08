import { User } from "../../entities/User";

export interface FindUserByIdRepository {
	findById: (id: string) => Promise<User | undefined>;
}
