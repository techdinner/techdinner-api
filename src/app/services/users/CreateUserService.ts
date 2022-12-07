import { User } from "@/domain/entities/User";
import { CreateUser } from "@/domain/usecases/users/CreateUser";
import { CreateUserRepository } from "@/app/repositories/users/CreateUserRepository";
import { FindUserByEmailRepository } from "@/app/repositories/users/FindUserByEmailRepository";
import { CreateUserDTO } from "@/app/dtos/users/CreateUserDTO";
import { HashRepository } from "@/app/repositories/crypt/HashRepository";

export class CreateUserService implements CreateUser {
  constructor(
    private readonly _createUserRepository: CreateUserRepository,
    private readonly _findUserByEmailRepository: FindUserByEmailRepository,
    private readonly _hashRepository: HashRepository,
  ) {}

  async execute(data: CreateUserDTO): Promise<void> {
    const userExists = await this._findUserByEmailRepository.findByEmail(
      data.email,
    );

    if (userExists) {
      throw new Error("The email is invalid or has already been used.");
    }

    data.password = await this._hashRepository.hash(data.password);

    const user = new User(data);

    await this._createUserRepository.create(user);
  }
}
