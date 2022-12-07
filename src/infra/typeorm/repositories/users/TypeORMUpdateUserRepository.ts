import { Repository } from "typeorm";
import { AppDataSource } from "@/database/data-source";
import { UpdateUserRepository } from "@/app/repositories/users/UpdateUserRepository";
import { User } from "@/infra/typeorm/entities/User";

export class TypeORMUpdateUserRepository implements UpdateUserRepository {
  private readonly _db: Repository<User> = AppDataSource.getRepository(User);

  async update(id: string, user: User): Promise<void> {
    await this._db.update(id, user);
  }
}
