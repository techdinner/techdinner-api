import { User } from "../../../domain/entities/User";

export interface FindUserByIdRepository {
	findById: (id: string) => Promise<User | undefined>;
}
