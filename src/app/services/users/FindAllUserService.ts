import { User } from "@/domain/entities/User";
import { FindAllUser } from "@/domain/usecases/users/FindAllUser";
import { FindAllUserRepository } from "@/app/repositories/users/FindAllUserRepository";

export class FindAllUserService implements FindAllUser {
  constructor(private readonly _findAllUserRepository: FindAllUserRepository) {}

  async execute(): Promise<User[] | undefined> {
    return await this._findAllUserRepository.findAllUsers();
  }
}
