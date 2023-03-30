export interface VerifyCodeDTO {
  userId: string;
  otp: string;
  type: string;
}

export interface VerifyCodeResponse {
  message: string;
  data: string | null;
}
