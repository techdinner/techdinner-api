import { hash } from "bcryptjs";
import { HashRepository } from "@repositories/crypt/HashRepository";

export class BcryptHashAdapter implements HashRepository {
	async hash(string: string): Promise<string> {
		return await hash(string, 12);
	}
}
