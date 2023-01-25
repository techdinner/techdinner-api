import { Repository } from "typeorm";
import { AppDataSource } from "@/database/data-source";
import { FindUserByIdRepository } from "@/app/repositories/users/find-user-by-id.repository";
import { User } from "@/infra/typeorm/entities/user";

export class TypeORMFindUserByIdRepository implements FindUserByIdRepository {
  private readonly _db: Repository<User> = AppDataSource.getRepository(User);

  async findById(id: string): Promise<User | null> {
    const user = await this._db.find({
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
      where: { id },
    });

    return user[0];
  }
}
