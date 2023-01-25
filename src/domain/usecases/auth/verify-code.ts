import { VerifyCodeDTO } from "@/app/dtos/auth/verify-code.dto";

export interface VerifyCode {
  execute(data: VerifyCodeDTO): Promise<void>;
}
