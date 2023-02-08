import { User } from "@/domain/entities/user";
import { FindAllUser } from "@/domain/usecases/users/find-all-user";
import { FindAllUserRepository } from "@/app/repositories/users/find-all-user.repository";

export class FindAllUserService implements FindAllUser {
  constructor(private readonly _findAllUserRepository: FindAllUserRepository) {}

  async execute(): Promise<User[] | null> {
    const users = await this._findAllUserRepository.findAllUsers();

    return users;
  }
}
