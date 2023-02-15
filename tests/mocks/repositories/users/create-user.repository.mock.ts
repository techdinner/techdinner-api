import { CreateUserRepository } from "@/app/repositories/users/create-user.repository";
import { User } from "@/domain/entities/user";
import { FindUserByEmailRepositoryMock } from "./find-user-by-email.repository.mock";

export class CreateUserRepositoryMock implements CreateUserRepository {
  async create(user: User): Promise<boolean> {
    const findUserByEmailRepositoryMock = new FindUserByEmailRepositoryMock();

    findUserByEmailRepositoryMock.users.push(user);

    if (findUserByEmailRepositoryMock.users.length) {
      return true;
    }

    return false;
  }
}
