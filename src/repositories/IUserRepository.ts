import { UserEntity } from "../entities/UserEntity";
import { CreateUserDTO } from "../dtos/users/CreateUserDTO";

export interface IUserRepository {
	getAllUsers: () => Promise<UserEntity[]>;
	save: (CreateUserDTO: CreateUserDTO) => Promise<CreateUserDTO>;
}
