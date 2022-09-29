import { hash } from "bcryptjs";
import { Hasher } from "@interfaces/Hasher";

export class BcryptHashAdapter implements Hasher {
	private readonly hash = hash;

	async hashString(string: string, salt: number | string): Promise<string> {
		const result = await this.hash(string, salt);

		return result;
	}
}
