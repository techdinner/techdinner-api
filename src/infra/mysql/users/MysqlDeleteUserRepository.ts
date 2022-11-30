import { QueryOptions } from "mysql";
import { DeleteUserRepository } from "@/app/repositories/users/DeleteUserRepository";
import { getPool } from "@/database";

export class MysqlDeleteUserRepository implements DeleteUserRepository {
  async delete(id: string): Promise<void> {
    const pool = getPool();

    const options: QueryOptions = {
      sql: "DELETE FROM users WHERE id = ?",
      values: [id],
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
