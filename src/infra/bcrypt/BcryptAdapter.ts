import { hash, compare } from "bcryptjs";

export class BcryptAdapter {
	async hashedPassword(
		password: string,
		salt: number | string,
	): Promise<string> {
		return hash(password, salt);
	}

	async comparePassword(
		password: string,
		hashedPassword: string,
	): Promise<boolean> {
		const compareResult = await compare(password, hashedPassword);

		return compareResult;
	}
}
