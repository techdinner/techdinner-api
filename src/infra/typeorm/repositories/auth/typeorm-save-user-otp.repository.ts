import type { Repository } from "typeorm";
import { AppDataSource } from "@/database/data-source";
import type { SaveUserOTPRepository } from "@/app/repositories/auth/save-user-otp.repository";
import { UserOTP } from "@/infra/typeorm/entities/user-otp";

export class TypeORMSaveUserOTPRepository implements SaveUserOTPRepository {
  private readonly _db: Repository<UserOTP> =
    AppDataSource.getRepository(UserOTP);

  async save(userOtp: UserOTP): Promise<void> {
    const newUserOtp = this._db.create(userOtp);

    await this._db.save(newUserOtp);
  }
}
