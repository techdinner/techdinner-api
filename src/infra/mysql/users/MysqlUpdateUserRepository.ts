import { QueryOptions } from "mysql";
import { UpdateUserRepository } from "@/app/repositories/users/UpdateUserRepository";
import { getPool } from "@/database";
import { UpdateUserDTO } from "@/app/dtos/users/UpdateUserDTO";

export class MysqlUpdateUserRepository implements UpdateUserRepository {
  async update(id: string, user: UpdateUserDTO): Promise<void> {
    const pool = getPool();

    const fields = [
      user?.name && "name = ?",
      user?.email && "email = ?",
      user?.password && "password = ?",
      "updated_at = NOW()",
    ]
      .filter(Boolean)
      .join(", ");

    const values = [
      user?.name && user.name,
      user?.email && user.email,
      user?.password && user.password,
      id,
    ].filter(Boolean);

    const options: QueryOptions = {
      sql: `UPDATE users SET ${fields} WHERE id = ?`,
      values,
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
