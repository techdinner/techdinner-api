import { UserEntity } from "../entities/UserEntity";
import { CreateUserDTO } from "../dtos/users/CreateUserDTO";

export interface IUserRepository {
	getAllUsers: () => Promise<UserEntity[]>;
	create: (CreateUserDTO: CreateUserDTO) => Promise<UserEntity>;
	getById: (id: number) => Promise<UserEntity | null>;
}
