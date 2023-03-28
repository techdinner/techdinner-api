import type { Repository } from "typeorm";
import { AppDataSource } from "@/database/data-source";
import type { FindUserByIdRepository } from "@/app/repositories/users/find-user-by-id.repository";
import { User as RawUser } from "@/infra/typeorm/entities/user";
import type { User } from "@/domain/entities/user";
import { UsersMapper } from "../../mappers/users.mapper";

export class TypeORMFindUserByIdRepository implements FindUserByIdRepository {
  private readonly _db: Repository<RawUser> =
    AppDataSource.getRepository(RawUser);

  async findById(id: string): Promise<User | null> {
    const user = await this._db.findOneBy({
      id,
    });

    if (!user) {
      return null;
    }

    return UsersMapper.toDomain(user);
  }
}
