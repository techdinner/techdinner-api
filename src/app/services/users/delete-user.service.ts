import { DeleteUser } from "@/domain/usecases/users/delete-user";
import { DeleteUserRepository } from "@/app/repositories/users/delete-user.repository";
import { FindUserByIdRepository } from "@/app/repositories/users/find-user-by-id.repository";
import { DeleteUserDTO } from "@/app/dtos/users/delete-user.dto";
import { HttpError } from "@/app/helpers/http-error";

export class DeleteUserService implements DeleteUser {
  constructor(
    private readonly _deleteUserRepository: DeleteUserRepository,
    private readonly _findUserByIdRepository: FindUserByIdRepository,
  ) {}

  async execute(data: DeleteUserDTO): Promise<void> {
    const { id } = data;

    const user = await this._findUserByIdRepository.findById(id);

    if (!user) {
      throw new HttpError(
        "User does not exist or has already been deleted.",
        400,
      );
    }

    return await this._deleteUserRepository.delete(id);
  }
}
