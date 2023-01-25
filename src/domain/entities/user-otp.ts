import { BaseEntity } from "./base-entity";

export class UserOTP extends BaseEntity {
  public userId: string;
  public otp: string;
  public type: string;
  public createdAt?: Date;
  public expiresAt?: Date;

  constructor(props: UserOTP) {
    super();
    Object.assign(this, props);

    const data = new Date();
    data.setHours(data.getHours() + 1);

    this.expiresAt = data;
  }
}
