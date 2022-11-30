import { CreateUserDTO } from "@/app/dtos/users/CreateUserDTO";

export interface CreateUser {
  execute(data: CreateUserDTO): Promise<void>;
}
