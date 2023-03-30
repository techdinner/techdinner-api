import { type DeepPartial } from "typeorm";
import { UniqueEntityID } from "@/domain/entities/core/unique-entity-id";
import { UserOTP } from "@/domain/entities/user-otp";
import { UserOTPNumber } from "@/domain/entities/value-objects/user-otp";
import { UserOTPType } from "@/domain/entities/value-objects/user-otp-type";
import { BcryptHashAdapter } from "@/infra/bcrypt/bcrypt-hash.adapter";
import { type UserOTP as RawUserOTP } from "../entities/user-otp";

export class UserOTPMapper {
  static async toPersistence(
    userOtp: UserOTP,
  ): Promise<DeepPartial<RawUserOTP>> {
    return {
      userId: userOtp.userId.value,
      otp: await userOtp.otp.getHashedValue(),
      type: userOtp.type.value,
      createdAt: userOtp.createdAt,
      expiresAt: userOtp.expiresAt,
    };
  }

  static toDomain(raw: RawUserOTP): UserOTP {
    return new UserOTP({
      userId: new UniqueEntityID(raw.userId),
      otp: new UserOTPNumber(raw.otp, true, new BcryptHashAdapter()),
      type: new UserOTPType(raw.type),
      createdAt: raw.createdAt,
      expiresAt: raw.expiresAt,
    });
  }
}
