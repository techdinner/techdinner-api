import { HttpError } from "@/app/helpers/http-error";
import type { HashRepository } from "@/app/repositories/crypt/hash.repository";

export class UserOTPNumber {
  private readonly _otp: string;

  private readonly _otpLength = 4;

  private readonly _hashRepository: HashRepository;

  readonly isHashed: boolean;

  get value(): string {
    return this._otp;
  }

  private _isValidLength(otp: string): boolean {
    return otp.length === this._otpLength;
  }

  async getHashedValue(): Promise<string> {
    if (this.isHashed) {
      return this._otp;
    } else {
      return await this._hashRepository.hash(this._otp);
    }
  }

  constructor(otp: string, isHashed: boolean, hashRepository: HashRepository) {
    if (!isHashed) {
      if (!this._isValidLength(otp)) {
        throw new HttpError("OTP is't valid length.", 400);
      }
    }

    this._otp = otp;
    this.isHashed = isHashed;
    this._hashRepository = hashRepository;
  }
}
