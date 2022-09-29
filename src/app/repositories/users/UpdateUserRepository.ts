import { UpdateUserDTO } from "@dtos/users/UpdateUserDTO";

export interface UpdateUserRepository {
	update(id: string, user: UpdateUserDTO): Promise<void>;
}
