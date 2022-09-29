import { UpdateUserDTO } from "@dtos/users/UpdateUserDTO";

export interface UpdateUser {
	execute(id: string, data: UpdateUserDTO): Promise<void>;
}
