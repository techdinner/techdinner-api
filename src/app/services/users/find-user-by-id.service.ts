import { User } from "@/domain/entities/user";
import { FindUserById } from "@/domain/usecases/users/find-user-by-id";
import { FindUserByIdRepository } from "@/app/repositories/users/find-user-by-id.repository";

export class FindUserByIdService implements FindUserById {
  constructor(
    private readonly _findUserByIdRepository: FindUserByIdRepository,
  ) {}

  async execute(id: string): Promise<User | null> {
    const data = await this._findUserByIdRepository.findById(id);

    if (!data) {
      throw new Error("User not found.");
    }

    return data;
  }
}
