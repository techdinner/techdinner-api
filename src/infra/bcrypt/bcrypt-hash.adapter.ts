import { hash } from "bcryptjs";
import { type HashRepository } from "@/app/repositories/crypt/hash.repository";

export class BcryptHashAdapter implements HashRepository {
  private readonly _saltSize: number = 12;

  async hash(string: string): Promise<string> {
    return await hash(string, this._saltSize);
  }
}
