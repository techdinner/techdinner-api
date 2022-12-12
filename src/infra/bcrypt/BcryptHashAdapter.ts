import { hash } from "bcryptjs";
import { HashRepository } from "@/app/repositories/crypt/HashRepository";

export class BcryptHashAdapter implements HashRepository {
  private readonly _saltSize: number = 12;

  async hash(string: string): Promise<string> {
    return await hash(string, this._saltSize);
  }
}
