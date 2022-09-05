import { readFileSync } from "fs";
import { getPool } from "../..";

export default async function run() {
	const sql = readFileSync(__dirname + "/commands.sql").toString("ascii");

	const pool = getPool();
	let data;
	await new Promise(async resolve => {
		await pool.query(sql, (error, results) => {
			if (error) throw error;
			data = results;
			resolve(data);
		});
	});
	return data;
}
