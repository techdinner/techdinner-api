import { UserOTP } from "@/domain/entities/UserOTP";

export interface SaveUserOTPRepository {
  save(userOtp: UserOTP): Promise<void>;
}
