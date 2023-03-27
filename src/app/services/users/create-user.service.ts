import { User } from "@/domain/entities/user";
import type { CreateUser } from "@/domain/usecases/users/create-user";
import type { CreateUserRepository } from "@/app/repositories/users/create-user.repository";
import type { FindUserByEmailRepository } from "@/app/repositories/users/find-user-by-email.repository";
import type { CreateUserDTO } from "@/app/dtos/users/create-user.dto";
import type { HashRepository } from "@/app/repositories/crypt/hash.repository";
import { HttpError } from "@/app/helpers/http-error";

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
      throw new HttpError(
        "The email is invalid or has already been used.",
        400,
      );
    }

    data.password = await this._hashRepository.hash(data.password);
    data.verified = true;

    const user = new User(data);

    await this._createUserRepository.create(user);
  }
}
