export interface CompareRepository {
  compare(string: string, hashedString: string): Promise<boolean>;
}
