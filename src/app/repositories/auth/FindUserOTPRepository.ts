import { UserOTP } from "@/domain/entities/UserOTP";

export interface FindUserOTPRepository {
  findUserOtp(userId: string, type: string): Promise<UserOTP[] | null>;
}
