import type { CreateUserDTO } from "@/app/dtos/users/create-user.dto";
import type { CreateUser } from "@/domain/use-cases/users/create-user";

export class CreateUserServiceMock implements CreateUser {
  data: CreateUserDTO;

  async execute(data: CreateUserDTO): Promise<void> {
    this.data = data;
  }
}
