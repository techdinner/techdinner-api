import { Repository } from "typeorm";
import { AppDataSource } from "@/database/data-source";
import { FindAllUserRepository } from "@/app/repositories/users/find-all-user.repository";
import { User } from "@/infra/typeorm/entities/user";

export class TypeORMFindAllUserRepository implements FindAllUserRepository {
  private readonly _db: Repository<User> = AppDataSource.getRepository(User);

  async findAllUsers(): Promise<User[] | null> {
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
        verified: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return users;
  }
}
