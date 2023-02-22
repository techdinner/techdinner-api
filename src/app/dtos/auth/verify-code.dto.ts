export interface VerifyCodeDTO {
  userId: string;
  otp: string;
  type: string;
}

export type VerifyCodeResponse = { message: string } | { token: string };
