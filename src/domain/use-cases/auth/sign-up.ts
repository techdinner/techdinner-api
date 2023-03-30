import { type CreateUserDTO } from "@/app/dtos/users/create-user.dto";

export interface SignUp {
  execute(data: CreateUserDTO): Promise<{ userId: string }>;
}
