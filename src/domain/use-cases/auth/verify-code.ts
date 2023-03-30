import {
  type VerifyCodeDTO,
  type VerifyCodeResponse,
} from "@/app/dtos/auth/verify-code.dto";

export interface VerifyCode {
  execute(data: VerifyCodeDTO): Promise<VerifyCodeResponse>;
}
