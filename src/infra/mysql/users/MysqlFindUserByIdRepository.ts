import { User } from "../../../app/entities/User";
import { FindUserByIdRepository } from "../../../app/repositories/users/FindUserByIdRepository";
import { QueryOptions } from "mysql";
import { getPool } from "../../../database";

export class MysqlFindUserByIdRepository implements FindUserByIdRepository {
	async findById(id: string): Promise<User | undefined> {
		const pool = getPool();

		let data;

		await new Promise(resolve => {
			const options: QueryOptions = {
				sql: "SELECT * FROM users WHERE id = ?",
				values: [id],
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
