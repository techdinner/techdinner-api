import { Repository } from "typeorm";
import { AppDataSource } from "@/database/data-source";
import { DeleteUserOTPRepository } from "@/app/repositories/auth/delete-user-otp.repository";
import { UserOTP } from "@/infra/typeorm/entities/user-otp";

export class TypeORMDeleteUserOTPRepository implements DeleteUserOTPRepository {
  private readonly _db: Repository<UserOTP> =
    AppDataSource.getRepository(UserOTP);

  async deleteUserOtp(userId: string, type: string): Promise<void> {
    await this._db
      .createQueryBuilder()
      .delete()
      .from(UserOTP)
      .where("userId = :userId and type = :type", { userId, type })
      .execute();
  }
}
