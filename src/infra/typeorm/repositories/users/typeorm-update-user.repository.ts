import type { Repository } from "typeorm";
import { AppDataSource } from "@/database/data-source";
import type { UpdateUserRepository } from "@/app/repositories/users/update-user.repository";
import { User } from "@/infra/typeorm/entities/user";

export class TypeORMUpdateUserRepository implements UpdateUserRepository {
  private readonly _db: Repository<User> = AppDataSource.getRepository(User);

  async update(id: string, user: User): Promise<void> {
    await this._db.update(id, user);
  }
}
