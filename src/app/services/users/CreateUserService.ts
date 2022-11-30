import { User } from "@/domain/entities/User";
import { CreateUser } from "@/domain/usecases/users/CreateUser";
import { CreateUserRepository } from "@/app/repositories/users/CreateUserRepository";
import { FindUserByEmailRepository } from "@/app/repositories/users/FindUserByEmailRepository";
import { CreateUserDTO } from "@/app/dtos/users/CreateUserDTO";

export class CreateUserService implements CreateUser {
  constructor(
    private readonly _createUserRepository: CreateUserRepository,
    private readonly _findUserByEmailRepository: FindUserByEmailRepository,
  ) {}

  async execute(data: CreateUserDTO): Promise<void> {
    const user = await this._findUserByEmailRepository.findByEmail(data.email);

    if (user) throw new Error("User already exists.");

    const newUser = new User(data);

    await this._createUserRepository.create(newUser);
  }
}
