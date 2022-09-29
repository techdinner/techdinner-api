export interface Hasher {
	hashString(string: string, salt: number | string): Promise<string>;
}
