import { UpdateUserDTO } from "@/app/dtos/users/UpdateUserDTO";

export interface UpdateUserRepository {
  update(id: string, user: UpdateUserDTO): Promise<void>;
}
