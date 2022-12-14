import { Repository } from "typeorm";
import { AppDataSource } from "@/database/data-source";
import { SaveUserOTPRepository } from "@/app/repositories/auth/SaveUserOTPRepository";
import { UserOTP } from "@/infra/typeorm/entities/UserOTP";

export class TypeORMSaveUserOTPRepository implements SaveUserOTPRepository {
  private readonly _db: Repository<UserOTP> =
    AppDataSource.getRepository(UserOTP);

  async save(userOtp: UserOTP): Promise<void> {
    const newUserOtp = this._db.create(userOtp);

    await this._db.save(newUserOtp);
  }
}
