import { type Repository } from "typeorm";
import { AppDataSource } from "@/database/data-source";
import { type UpdateUserRepository } from "@/app/repositories/users/update-user.repository";
import { User as RawUser } from "@/infra/typeorm/entities/user";
import { type User } from "@/domain/entities/user";
import { UsersMapper } from "../../mappers/users.mapper";

export class TypeORMUpdateUserRepository implements UpdateUserRepository {
  private readonly _db: Repository<RawUser> =
    AppDataSource.getRepository(RawUser);

  async update(id: string, user: User): Promise<void> {
    const raw = await UsersMapper.toPersistence(user);

    await this._db.update(id, raw);
  }
}
