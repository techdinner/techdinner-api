import { User } from "@entities/User";
import { CreateUserRepository } from "@repositories/users/CreateUserRepository";
import { QueryOptions } from "mysql";
import { getPool } from "@database";

export class MysqlCreateUserRepository implements CreateUserRepository {
	async create(user: User): Promise<void> {
		const pool = getPool();

		const options: QueryOptions = {
			sql: "INSERT INTO users SET id = ?, name = ?, email = ?, role = ?, active = ?",
			values: [user.id, user.name, user.email, user.role, user.active],
		};

		await pool.query(options, error => {
			if (error != null) throw error;
		});
	}
}
