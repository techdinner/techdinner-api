import type { Repository } from "typeorm";
import { AppDataSource } from "@/database/data-source";
import type { CreateUserRepository } from "@/app/repositories/users/create-user.repository";
import { User as RawUser } from "@/infra/typeorm/entities/user";
import type { User } from "@/domain/entities/user";
import { UsersMapper } from "../../mappers/users.mapper";

export class TypeORMCreateUserRepository implements CreateUserRepository {
  private readonly _db: Repository<RawUser> =
    AppDataSource.getRepository(RawUser);

  async create(user: User): Promise<boolean> {
    const raw = await UsersMapper.toPersistence(user);

    const newUser = this._db.create(raw);

    if (await this._db.save(newUser)) {
      return true;
    }

    return false;
  }
}
