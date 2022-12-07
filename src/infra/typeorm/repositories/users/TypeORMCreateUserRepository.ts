import { Repository } from "typeorm";
import { AppDataSource } from "@/database/data-source";
import { CreateUserRepository } from "@/app/repositories/users/CreateUserRepository";
import { User } from "@/infra/typeorm/entities/User";

export class TypeORMCreateUserRepository implements CreateUserRepository {
  private readonly _db: Repository<User> = AppDataSource.getRepository(User);

  async create(user: User): Promise<void> {
    const newUser = this._db.create(user);

    await this._db.save(newUser);
  }
}
