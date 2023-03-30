import { type UserOTP } from "@/domain/entities/user-otp";

export interface FindUserOTPRepository {
  findUserOtp(userId: string, type: string): Promise<UserOTP[] | null>;
}
