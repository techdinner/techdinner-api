export interface DeleteUserOTPRepository {
  deleteUserOtp(userId: string, type: string): Promise<void>;
}
