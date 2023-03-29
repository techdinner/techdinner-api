import { User } from "@/domain/entities/user";
import type { CreateUser } from "@/domain/use-cases/users/create-user";
import type { CreateUserRepository } from "@/app/repositories/users/create-user.repository";
import type { FindUserByEmailRepository } from "@/app/repositories/users/find-user-by-email.repository";
import type { CreateUserDTO } from "@/app/dtos/users/create-user.dto";
import type { HashRepository } from "@/app/repositories/crypt/hash.repository";
import { HttpError } from "@/app/helpers/http-error";
import { UserEmail } from "@/domain/entities/value-objects/user-email";
import { UserPassword } from "@/domain/entities/value-objects/user-password";
import { UserCPF } from "@/domain/entities/value-objects/user-cpf";
import { UserPhone } from "@/domain/entities/value-objects/user-phone";
import { UniqueEntityID } from "@/domain/entities/core/unique-entity-id";
import { UserRole } from "@/domain/entities/value-objects/user-role";

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

    const user = new User({
      name: data.name,
      email: new UserEmail(data.email),
      password: new UserPassword(data.password, false, this._hashRepository),
      cpf: new UserCPF(data.cpf),
      phone: new UserPhone(data.phone),
      companyId: new UniqueEntityID(data.companyId),
      role: new UserRole(data.role),
      photo: data.photo,
      verified: true,
    });

    await this._createUserRepository.create(user);
  }
}
