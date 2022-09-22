import { User } from "../../../domain/entities/User";
import { FindUserByEmailRepository } from "../../../app/repositories/users/FindUserByEmailRepository";
import { QueryOptions } from "mysql";
import { getPool } from "../../../database";

export class MysqlFindUserByEmailRepository
	implements FindUserByEmailRepository
{
	async findByEmail(email: string): Promise<User | undefined> {
		const pool = getPool();

		let data;

		await new Promise(resolve => {
			const options: QueryOptions = {
				sql: "SELECT * FROM users WHERE email = ?",
				values: [email],
			};

			pool.query(options, (error, results) => {
				if (error != null) throw error;
				data = results;
				resolve(data);
			});
		});

		return data;
	}
}
