import { compare } from "bcryptjs";
import { type CompareRepository } from "@/app/repositories/crypt/compare.repository";

export class BcryptCompareAdapter implements CompareRepository {
  async compare(string: string, hashedString: string): Promise<boolean> {
    return await compare(string, hashedString);
  }
}
