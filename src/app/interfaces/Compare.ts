export interface Compare {
	compareStringHashed(string: string, hashedString: string): Promise<boolean>;
}
