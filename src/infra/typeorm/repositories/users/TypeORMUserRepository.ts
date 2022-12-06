import { Repository } from "typeorm";
import { AppDataSource } from "@/database/data-source";
import { UpdateUserDTO } from "@/app/dtos/users/UpdateUserDTO";
import { CreateUserRepository } from "@/app/repositories/users/CreateUserRepository";
import { DeleteUserRepository } from "@/app/repositories/users/DeleteUserRepository";
import { FindAllUserRepository } from "@/app/repositories/users/FindAllUserRepository";
import { FindUserByEmailRepository } from "@/app/repositories/users/FindUserByEmailRepository";
import { FindUserByIdRepository } from "@/app/repositories/users/FindUserByIdRepository";
import { UpdateUserRepository } from "@/app/repositories/users/UpdateUserRepository";
import { User } from "@/infra/typeorm/entities/User";

export class TypeORMUserRepository
  implements
    FindAllUserRepository,
    FindUserByEmailRepository,
    FindUserByIdRepository,
    CreateUserRepository,
    UpdateUserRepository,
    DeleteUserRepository
{
  private readonly _db: Repository<User> = AppDataSource.getRepository(User);

  async findAllUsers(): Promise<User[] | undefined> {
    const users = await this._db.find();

    return users;
  }

  async findById(id: string): Promise<User | null> {
    const user = await this._db.findOneBy({
      id,
    });

    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this._db.findOneBy({
      email,
    });

    return user;
  }

  async create(user: User): Promise<void> {
    await this._db.save(user);
  }

  async update(id: string, user: UpdateUserDTO): Promise<void> {
    await this._db.update(id, user);
  }

  async delete(id: string): Promise<void> {
    await this._db.delete(id);
  }
}
