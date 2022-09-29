import { User } from "@entities/User";

export interface FindAllUser {
	execute(): Promise<User[] | undefined>;
}
