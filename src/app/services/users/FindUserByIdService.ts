import { User } from "@/domain/entities/User";
import { FindUserById } from "@/domain/usecases/users/FindUserById";
import { FindUserByIdRepository } from "@/app/repositories/users/FindUserByIdRepository";

export class FindUserByIdService implements FindUserById {
  constructor(
    private readonly _findUserByIdRepository: FindUserByIdRepository,
  ) {}

  async execute(id: string): Promise<User | undefined> {
    return await this._findUserByIdRepository.findById(id);
  }
}
