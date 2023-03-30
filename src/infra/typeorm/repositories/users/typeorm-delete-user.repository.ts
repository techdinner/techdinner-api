import { type Repository } from "typeorm";
import { AppDataSource } from "@/database/data-source";
import { type DeleteUserRepository } from "@/app/repositories/users/delete-user.repository";
import { User } from "@/infra/typeorm/entities/user";

export class TypeORMDeleteUserRepository implements DeleteUserRepository {
  private readonly _db: Repository<User> = AppDataSource.getRepository(User);

  async delete(id: string): Promise<void> {
    await this._db.delete(id);
  }
}
