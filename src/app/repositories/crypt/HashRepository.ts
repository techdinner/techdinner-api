export interface HashRepository {
	hash(string: string): Promise<string>;
}
