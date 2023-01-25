import { User } from "@/domain/entities/user";
import { CreateUser } from "@/domain/usecases/users/create-user";
import { CreateUserRepository } from "@/app/repositories/users/create-user.repository";
import { FindUserByEmailRepository } from "@/app/repositories/users/find-user-by-email.repository";
import { CreateUserDTO } from "@/app/dtos/users/create-user.dto";
import { HashRepository } from "@/app/repositories/crypt/hash.repository";

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
    data.verified = true;

    const user = new User(data);

    await this._createUserRepository.create(user);
  }
}
