import { Repository } from "typeorm";
import { AppDataSource } from "@/database/data-source";
import { FindUserByEmailRepository } from "@/app/repositories/users/find-user-by-email.repository";
import { User } from "@/infra/typeorm/entities/user";

export class TypeORMFindUserByEmailRepository
  implements FindUserByEmailRepository
{
  private readonly _db: Repository<User> = AppDataSource.getRepository(User);

  async findByEmail(email: string): Promise<User | null> {
    const user = await this._db.findOneBy({
      email,
    });

    return user;
  }
}
