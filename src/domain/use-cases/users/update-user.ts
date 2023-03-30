import { type UpdateUserDTO } from "@/app/dtos/users/update-user.dto";

export interface UpdateUser {
  execute(data: UpdateUserDTO): Promise<void>;
}
