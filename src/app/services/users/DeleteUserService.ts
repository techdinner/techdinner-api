import { DeleteUser } from "@/domain/usecases/users/DeleteUser";
import { DeleteUserRepository } from "@/app/repositories/users/DeleteUserRepository";
import { FindUserByIdRepository } from "@/app/repositories/users/FindUserByIdRepository";

export class DeleteUserService implements DeleteUser {
  constructor(
    private readonly _deleteUserRepository: DeleteUserRepository,
    private readonly _findUserByIdRepository: FindUserByIdRepository,
  ) {}

  async execute(id: string): Promise<void> {
    const user = await this._findUserByIdRepository.findById(id);

    if (!user) throw new Error("User not exists.");

    return await this._deleteUserRepository.delete(id);
  }
}
