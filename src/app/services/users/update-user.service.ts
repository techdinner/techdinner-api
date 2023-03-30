import { type UpdateUserRepository } from "@/app/repositories/users/update-user.repository";
import { type FindUserByIdRepository } from "@/app/repositories/users/find-user-by-id.repository";
import { type UpdateUserDTO } from "@/app/dtos/users/update-user.dto";
import { type UpdateUser } from "@/domain/use-cases/users/update-user";
import { HttpError } from "@/app/helpers/http-error";
import { UserCPF } from "@/domain/entities/value-objects/user-cpf";
import { UserPhone } from "@/domain/entities/value-objects/user-phone";

export class UpdateUserService implements UpdateUser {
  constructor(
    private readonly _updateUserRepository: UpdateUserRepository,
    private readonly _findUserByIdRepository: FindUserByIdRepository,
  ) {}

  async execute(data: UpdateUserDTO): Promise<void> {
    const userExists = await this._findUserByIdRepository.findById(data.id);

    if (!userExists) {
      throw new HttpError("User is invalid or does not exist!", 400);
    }

    userExists.name = data.name;
    userExists.cpf = new UserCPF(data.cpf);
    userExists.phone = new UserPhone(data.phone);
    userExists.photo = data.photo;

    userExists.update();

    await this._updateUserRepository.update(data.id, userExists);
  }
}
