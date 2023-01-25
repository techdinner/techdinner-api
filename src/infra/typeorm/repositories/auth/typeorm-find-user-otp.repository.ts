import { Repository } from "typeorm";
import { AppDataSource } from "@/database/data-source";
import { FindUserOTPRepository } from "@/app/repositories/auth/find-user-otp.repository";
import { UserOTP } from "@/infra/typeorm/entities/user-otp";

export class TypeORMFindUserOTPRepository implements FindUserOTPRepository {
  private readonly _db: Repository<UserOTP> =
    AppDataSource.getRepository(UserOTP);

  async findUserOtp(userId: string, type: string): Promise<UserOTP[] | null> {
    const userOtp = await this._db.find({
      select: {
        id: true,
        userId: true,
        otp: true,
        type: true,
      },
      where: { userId, type },
    });

    return userOtp;
  }
}
