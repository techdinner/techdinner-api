import { Repository } from "typeorm";
import { AppDataSource } from "@/database/data-source";
import { DeleteUserRepository } from "@/app/repositories/users/DeleteUserRepository";
import { User } from "@/infra/typeorm/entities/User";

export class TypeORMDeleteUserRepository implements DeleteUserRepository {
  private readonly _db: Repository<User> = AppDataSource.getRepository(User);

  async delete(id: string): Promise<void> {
    await this._db.delete(id);
  }
}
