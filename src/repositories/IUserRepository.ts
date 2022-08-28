import { UserEntity } from "../entities/UserEntity";
import { CreateUserDTO } from "../dtos/users/CreateUserDTO";

export interface IUserRepository {
	findByEmail: (email: string) => Promise<UserEntity>;
	getAllUsers: () => Promise<UserEntity[]>;
	create: (CreateUserDTO: CreateUserDTO) => Promise<UserEntity>;
}
