import type { CreateUserDTO } from "@/app/dtos/users/create-user.dto";
import type { CreateUser } from "@/domain/usecases/users/create-user";

export class CreateUserServiceMock implements CreateUser {
  public data: CreateUserDTO;

  async execute(data: CreateUserDTO): Promise<void> {
    this.data = data;
  }
}
