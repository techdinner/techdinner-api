import { UpdateUserDTO } from "@/app/dtos/users/UpdateUserDTO";

export interface UpdateUser {
  execute(data: UpdateUserDTO): Promise<void>;
}
