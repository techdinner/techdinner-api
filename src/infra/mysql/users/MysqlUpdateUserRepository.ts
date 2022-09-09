import { User } from "../../../app/entities/User";
import { UpdateUserRepository } from "../../../app/repositories/users/UpdateUserRepository";
import { QueryOptions } from "mysql";
import { getPool } from "../../../database";

export class MysqlUpdateUserRepository implements UpdateUserRepository {
	async update(id: string, user?: User): Promise<void> {
		const pool = getPool();

		const options: QueryOptions = {
			sql: `UPDATE users SET
			${user?.name && "name = ?"}
			${user?.email && ", email = ?"}
			${user?.password && ", password = ?"}
			${user?.active && ", active = ?"}
			${user?.role && ", role = ?"} WHERE id = ?`,
			values: [
				user?.name && user.name,
				user?.email && user.email,
				user?.password && user.password,
				user?.active && user.active,
				user?.role && user.role,
				id,
			],
		};

		await pool.query(options, error => {
			if (error != null) throw error;
		});
	}
}
