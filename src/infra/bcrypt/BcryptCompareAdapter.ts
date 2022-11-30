import { compare } from "bcryptjs";
import { CompareRepository } from "@/app/repositories/crypt/CompareRepository";

export class BcryptCompareAdapter implements CompareRepository {
  async compare(string: string, hashedString: string): Promise<boolean> {
    return await compare(string, hashedString);
  }
}
