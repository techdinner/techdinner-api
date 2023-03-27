import type { UserOTP } from "@/domain/entities/user-otp";

export interface SaveUserOTPRepository {
  save(userOtp: UserOTP): Promise<void>;
}
