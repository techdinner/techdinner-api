import { type Repository } from "typeorm";
import { AppDataSource } from "@/database/data-source";
import { type SaveUserOTPRepository } from "@/app/repositories/auth/save-user-otp.repository";
import { UserOTP as RawUserOTP } from "@/infra/typeorm/entities/user-otp";
import { type UserOTP } from "@/domain/entities/user-otp";
import { UserOTPMapper } from "../../mappers/user-otp.mapper";

export class TypeORMSaveUserOTPRepository implements SaveUserOTPRepository {
  private readonly _db: Repository<RawUserOTP> =
    AppDataSource.getRepository(RawUserOTP);

  async save(userOtp: UserOTP): Promise<void> {
    const raw = await UserOTPMapper.toPersistence(userOtp);

    const newUserOtp = this._db.create(raw);

    await this._db.save(newUserOtp);
  }
}
