import { randomUUID } from "node:crypto";
import { type HashRepository } from "@/app/repositories/crypt/hash.repository";

export class HashRepositoryMock implements HashRepository {
  plaintext: string;
  hashed: string = randomUUID();

  async hash(string: string): Promise<string> {
    this.plaintext = string;

    return this.hashed;
  }
}
