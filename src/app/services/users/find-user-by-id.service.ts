import { type User } from "@/domain/entities/user";
import { type FindUserById } from "@/domain/use-cases/users/find-user-by-id";
import { type FindUserByIdRepository } from "@/app/repositories/users/find-user-by-id.repository";
import { type FindUserByIdDTO } from "@/app/dtos/users/find-user-by-id.dto";
import { HttpError } from "@/app/helpers/http-error";

export class FindUserByIdService implements FindUserById {
  constructor(
    private readonly _findUserByIdRepository: FindUserByIdRepository,
  ) {}

  async execute(data: FindUserByIdDTO): Promise<User | null> {
    const { id } = data;

    const user = await this._findUserByIdRepository.findById(id);

    if (!user) {
      throw new HttpError("User not found.", 400);
    }

    return user;
  }
}
