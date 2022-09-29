import { CreateUserDTO } from "@dtos/users/CreateUserDTO";

export interface CreateUser {
	execute(data: CreateUserDTO): Promise<void>;
}
