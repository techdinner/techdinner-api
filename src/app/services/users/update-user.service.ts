import { UpdateUserRepository } from "@/app/repositories/users/update-user.repository";
import { FindUserByIdRepository } from "@/app/repositories/users/find-user-by-id.repository";
import { UpdateUserDTO } from "@/app/dtos/users/update-user.dto";
import { UpdateUser } from "@/domain/usecases/users/update-user";

export class UpdateUserService implements UpdateUser {
  constructor(
    private readonly _updateUserRepository: UpdateUserRepository,
    private readonly _findUserByIdRepository: FindUserByIdRepository,
  ) {}

  async execute(data: UpdateUserDTO): Promise<void> {
    const userExists = await this._findUserByIdRepository.findById(data.id);

    if (!userExists) {
      throw new Error("User is invalid or does not exist!");
    }

    userExists.name = data.name;
    userExists.cpf = data.cpf;
    userExists.phone = data.phone;
    userExists.photo = data.photo;

    await this._updateUserRepository.update(data.id, userExists);
  }
}
