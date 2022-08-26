import { UserEntity } from "../entities/UserEntity";

export type UserTypes = {
	name: string;
	email: string;
	password: string;
};

export interface IUserRepository {
	getAllUsers(): Promise<UserEntity>;
	save({ name, email, password }: UserTypes): Promise<void>;
}
