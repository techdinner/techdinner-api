import { VerifyCodeDTO } from "@/app/dtos/auth/VerifyCodeDTO";

export interface VerifyCode {
  execute(data: VerifyCodeDTO): Promise<void>;
}
