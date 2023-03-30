import { type Repository } from "typeorm";
import { AppDataSource } from "@/database/data-source";
import { type FindAllUserRepository } from "@/app/repositories/users/find-all-user.repository";
import { User as RawUser } from "@/infra/typeorm/entities/user";
import { type User } from "@/domain/entities/user";
import { UsersMapper } from "../../mappers/users.mapper";

export class TypeORMFindAllUserRepository implements FindAllUserRepository {
  private readonly _db: Repository<RawUser> =
    AppDataSource.getRepository(RawUser);

  async findAllUsers(): Promise<User[] | null> {
    const users = await this._db.find();

    return users.map(UsersMapper.toDomain);
  }
}
