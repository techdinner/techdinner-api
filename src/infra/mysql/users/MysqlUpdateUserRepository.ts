import { UpdateUserRepository } from "@repositories/users/UpdateUserRepository";
import { QueryOptions } from "mysql";
import { getPool } from "@database";
import { UpdateUserDTO } from "@dtos/users/UpdateUserDTO";

export class MysqlUpdateUserRepository implements UpdateUserRepository {
	async update(id: string, user: UpdateUserDTO): Promise<void> {
		const pool = getPool();

		const fields = [
			user?.name && "name = ?",
			user?.email && "email = ?",
			user?.password && "password = ?",
			user?.active && "active = ?",
			user?.role && "role = ?",
			"updated_at = NOW()",
		]
			.filter(Boolean)
			.join(", ");

		const values = [
			user?.name && user.name,
			user?.email && user.email,
			user?.password && user.password,
			user?.active && user.active,
			user?.role && user.role,
			id,
		].filter(Boolean);

		const options: QueryOptions = {
			sql: `UPDATE users SET ${fields} WHERE id = ?`,
			values,
		};

		await pool.query(options, error => {
			if (error != null) throw error;
		});
	}
}
