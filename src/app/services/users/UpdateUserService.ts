import { UpdateUserRepository } from "@/app/repositories/users/UpdateUserRepository";
import { UpdateUserDTO } from "@/app/dtos/users/UpdateUserDTO";
import { UpdateUser } from "@/domain/usecases/users/UpdateUser";
import { HashRepository } from "@/app/repositories/crypt/HashRepository";

export class UpdateUserService implements UpdateUser {
  constructor(
    private readonly _updateUserRepository: UpdateUserRepository,
    private readonly _hashRepository: HashRepository,
  ) {}

  async execute(id: string, data: UpdateUserDTO): Promise<void> {
    const objectValuesRaw = Object.values(data).join("");
    const somethingWillUpdate = objectValuesRaw !== "";

    if (somethingWillUpdate) {
      if (data?.password) {
        data.password = await this._hashRepository.hash(data.password);
      }
      await this._updateUserRepository.update(id, data);
    }
  }
}
