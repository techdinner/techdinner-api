import { CreateUserDTO } from "@/app/dtos/users/CreateUserDTO";

export interface SignUp {
  execute(data: CreateUserDTO): Promise<string>;
}
