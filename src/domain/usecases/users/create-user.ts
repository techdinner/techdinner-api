import { CreateUserDTO } from "@/app/dtos/users/create-user.dto";

export interface CreateUser {
  execute(data: CreateUserDTO): Promise<void>;
}
