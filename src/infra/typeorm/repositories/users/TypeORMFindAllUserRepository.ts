import { Repository } from "typeorm";
import { AppDataSource } from "@/database/data-source";
import { FindAllUserRepository } from "@/app/repositories/users/FindAllUserRepository";
import { User } from "@/infra/typeorm/entities/User";

export class TypeORMFindAllUserRepository implements FindAllUserRepository {
  private readonly _db: Repository<User> = AppDataSource.getRepository(User);

  async findAllUsers(): Promise<User[] | undefined> {
    const users = await this._db.find({
      select: {
        id: true,
        name: true,
        email: true,
        cpf: true,
        phone: true,
        companyId: true,
        role: true,
        photo: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return users;
  }
}
