import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";
import { QueryOptions } from "mysql";
import { getPool } from "../../../database";

export class UserRepository implements IUserRepository {
	async findByEmail(email: string): Promise<User | undefined> {
		const pool = getPool();

		let data;

		await new Promise(async resolve => {
			const options: QueryOptions = {
				sql: "SELECT * FROM users WHERE email = ?",
				values: [email],
			};

			await pool.query(options, (error, results) => {
				if (error) throw error;
				data = results;
				resolve(data);
			});
		});

		return data;
	}

	async getAllUsers(): Promise<User | undefined> {
		const pool = getPool();

		let data;

		await new Promise(async resolve => {
			await pool.query("SELECT * FROM users", (error, results) => {
				if (error) throw error;
				data = results;
				resolve(data);
			});
		});

		return data;
	}

	async create(user: User): Promise<void> {
		const pool = getPool();

		const options: QueryOptions = {
			sql: "INSERT INTO users SET id = ?, name = ?, email = ?, password = ?",
			values: [user.id, user.name, user.email, user.password],
		};

		await pool.query(options, error => {
			if (error) throw error;
		});
	}

	async findById(id: string): Promise<User | undefined> {
		const pool = getPool();

		let data;

		await new Promise(async resolve => {
			const options: QueryOptions = {
				sql: "SELECT * FROM users WHERE id = ?",
				values: [id],
			};

			await pool.query(options, (error, results) => {
				if (error) throw error;
				data = results;
				resolve(data);
			});
		});

		return data;
	}

	async update(id: string, user?: User): Promise<void> {
		const pool = getPool();

		const options: QueryOptions = {
			sql: "UPDATE users SET name = ?, email = ?, password = ?, active = ?, role = ? WHERE id = ?",
			values: [
				user?.name,
				user?.email,
				user?.password,
				user?.active,
				user?.role,
				id,
			],
		};

		await pool.query(options, error => {
			if (error) throw error;
		});
	}

	async delete(id: string): Promise<void> {
		const pool = getPool();

		const options: QueryOptions = {
			sql: "DELETE FROM users WHERE id = ?",
			values: [id],
		};

		await pool.query(options, error => {
			if (error) throw error;
		});
	}
}
