import { UpdateUserRepository } from "@/app/repositories/users/UpdateUserRepository";
import { UpdateUserDTO } from "@/app/dtos/users/UpdateUserDTO";
import { UpdateUser } from "@/domain/usecases/users/UpdateUser";

export class UpdateUserService implements UpdateUser {
  constructor(private readonly _updateUserRepository: UpdateUserRepository) {}

  async execute(id: string, data: UpdateUserDTO): Promise<void> {
    await this._updateUserRepository.update(id, data);
  }
}
