import { type Repository } from "typeorm";
import { AppDataSource } from "@/database/data-source";
import { type FindUserByEmailRepository } from "@/app/repositories/users/find-user-by-email.repository";
import { User as RawUser } from "@/infra/typeorm/entities/user";
import { type User } from "@/domain/entities/user";
import { UsersMapper } from "../../mappers/users.mapper";

export class TypeORMFindUserByEmailRepository
  implements FindUserByEmailRepository
{
  private readonly _db: Repository<RawUser> =
    AppDataSource.getRepository(RawUser);

  async findByEmail(email: string): Promise<User | null> {
    const user = await this._db.findOneBy({
      email,
    });

    if (!user) {
      return null;
    }

    return UsersMapper.toDomain(user);
  }
}
