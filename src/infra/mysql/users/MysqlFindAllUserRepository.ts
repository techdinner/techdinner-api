import { User } from "@/domain/entities/User";
import { FindAllUserRepository } from "@/app/repositories/users/FindAllUserRepository";
import { getPool } from "@/database";

export class MysqlFindAllUserRepository implements FindAllUserRepository {
  async findAllUsers(): Promise<User[] | undefined> {
    const pool = getPool();

    let data;

    await new Promise(resolve => {
      pool.query("SELECT * FROM users", (error, results) => {
        if (error != null) throw error;
        data = results;
        resolve(data);
      });
    });

    return data;
  }
}
