import { HttpError } from "@/app/helpers/http-error";
import type { HashRepository } from "@/app/repositories/crypt/hash.repository";

export class UserPassword {
  private readonly _password: string;

  private readonly _minLength = 8;

  private readonly _hashRepository: HashRepository;

  public readonly isHashed: boolean;

  get value(): string {
    return this._password;
  }

  private _isValidLength(password: string): boolean {
    return password.length >= this._minLength;
  }

  public async getHashedValue(): Promise<string> {
    if (this.isHashed) {
      return this._password;
    } else {
      return await this._hashRepository.hash(this._password);
    }
  }

  constructor(
    password: string,
    isHashed: boolean,
    hashRepository: HashRepository,
  ) {
    if (!isHashed) {
      if (!this._isValidLength(password)) {
        throw new HttpError(
          `The quantity must be at least ${this._minLength}.`,
          400,
        );
      }
    }

    this._password = password;
    this.isHashed = isHashed;
    this._hashRepository = hashRepository;
  }
}
