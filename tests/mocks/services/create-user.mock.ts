import { CreateUserDTO } from "@/app/dtos/users/create-user.dto";
import { CreateUser } from "@/domain/usecases/users/create-user";

export class CreateUserServiceMock implements CreateUser {
  public data: CreateUserDTO;

  async execute(data: CreateUserDTO): Promise<void> {
    this.data = data;
  }
}
