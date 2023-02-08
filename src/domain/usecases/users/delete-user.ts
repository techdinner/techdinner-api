import { DeleteUserDTO } from "@/app/dtos/users/delete-user.dto";

export interface DeleteUser {
  execute(data: DeleteUserDTO): Promise<void>;
}
