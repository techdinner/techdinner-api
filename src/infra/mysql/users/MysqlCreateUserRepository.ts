import { QueryOptions } from "mysql";
import { User } from "@/domain/entities/User";
import { getPool } from "@/database";
import { CreateUserRepository } from "@/app/repositories/users/CreateUserRepository";

export class MysqlCreateUserRepository implements CreateUserRepository {
  async create(user: User): Promise<void> {
    const pool = getPool();

    const options: QueryOptions = {
      sql: "INSERT INTO users SET id = ?, name = ?, email = ?",
      values: [user.id, user.name, user.email],
    };

    await new Promise((resolve, reject) => {
      pool.query(options, error => {
        if (error != null) {
          reject(error);
          throw error;
        }
      });
    });
  }
}
