import { Repository } from "typeorm";
import { AppDataSource } from "@/database/data-source";
import { CreateUserRepository } from "@/app/repositories/users/create-user.repository";
import { User } from "@/infra/typeorm/entities/user";

export class TypeORMCreateUserRepository implements CreateUserRepository {
  private readonly _db: Repository<User> = AppDataSource.getRepository(User);

  async create(user: User): Promise<boolean> {
    const newUser = this._db.create(user);

    if (await this._db.save(newUser)) {
      return true;
    }

    return false;
  }
}
