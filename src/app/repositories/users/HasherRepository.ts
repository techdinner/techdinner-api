export interface HasherRepository {
	hasher: (password: string, salt: number | string) => Promise<string>;
}
