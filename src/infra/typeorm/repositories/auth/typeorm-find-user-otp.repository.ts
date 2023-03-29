import type { Repository } from "typeorm";
import { AppDataSource } from "@/database/data-source";
import type { FindUserOTPRepository } from "@/app/repositories/auth/find-user-otp.repository";
import { UserOTP as RawUserOTP } from "@/infra/typeorm/entities/user-otp";
import type { UserOTP } from "@/domain/entities/user-otp";
import { UserOTPMapper } from "../../mappers/user-otp.mapper";

export class TypeORMFindUserOTPRepository implements FindUserOTPRepository {
  private readonly _db: Repository<RawUserOTP> =
    AppDataSource.getRepository(RawUserOTP);

  async findUserOtp(userId: string, type: string): Promise<UserOTP[] | null> {
    const userOtp = await this._db.find({
      where: { userId, type },
    });

    return userOtp.map(UserOTPMapper.toDomain);
  }
}
