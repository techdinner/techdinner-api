import type {
  VerifyCodeDTO,
  VerifyCodeResponse,
} from "@/app/dtos/auth/verify-code.dto";

export interface VerifyCode {
  execute(data: VerifyCodeDTO): Promise<VerifyCodeResponse>;
}
