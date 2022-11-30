import { UpdateUserDTO } from "@/app/dtos/users/UpdateUserDTO";

export interface UpdateUser {
  execute(id: string, data: UpdateUserDTO): Promise<void>;
}
