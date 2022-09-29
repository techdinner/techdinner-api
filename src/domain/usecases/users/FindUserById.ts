import { User } from "@entities/User";

export interface FindUserById {
	execute(id: string): Promise<User | undefined>;
}
