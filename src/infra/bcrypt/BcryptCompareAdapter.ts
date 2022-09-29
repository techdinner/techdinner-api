import { compare } from "bcryptjs";
import { Compare } from "@interfaces/Compare";

export class BcryptCompareAdapter implements Compare {
	private readonly compare = compare;

	async compareStringHashed(
		string: string,
		hashedString: string,
	): Promise<boolean> {
		const result = await this.compare(string, hashedString);

		return result;
	}
}
