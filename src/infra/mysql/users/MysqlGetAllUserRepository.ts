import { User } from "../../../domain/entities/User";
import { GetAllUserRepository } from "../../../app/repositories/users/GetAllUserRepository";
import { getPool } from "../../../database";

export class MysqlGetAllUserRepository implements GetAllUserRepository {
	async getAllUsers(): Promise<User[] | undefined> {
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
