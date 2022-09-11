import { UpdateUserRepository } from "../../../app/repositories/users/UpdateUserRepository";
import { QueryOptions } from "mysql";
import { getPool } from "../../../database";
import { UpdateUserDTO } from "../../../app/dtos/users/UpdateUserDTO";

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
			.filter(x => x)
			.join(", ");

		const values = [
			user?.name && user.name,
			user?.email && user.email,
			user?.password && user.password,
			user?.active && user.active,
			user?.role && user.role,
			id,
		].filter(x => x);

		const options: QueryOptions = {
			sql: `UPDATE users SET ${fields} WHERE id = ?`,
			values,
		};

		await pool.query(options, error => {
			if (error != null) throw error;
		});
	}
}
