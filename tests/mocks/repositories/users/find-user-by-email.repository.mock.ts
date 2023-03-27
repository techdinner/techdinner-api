import type { FindUserByEmailRepository } from "@/app/repositories/users/find-user-by-email.repository";
import type { User } from "@/domain/entities/user";

export class FindUserByEmailRepositoryMock
  implements FindUserByEmailRepository
{
  public users: User[] = [];

  async findByEmail(email: string): Promise<User | null> {
    const user = this.users.find(user => user.email === email);

    if (!user) {
      return null;
    }

    return user;
  }
}
