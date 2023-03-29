import type { Replace } from "@/app/helpers/replace";
import { BaseEntity } from "./core/base-entity";
import type { UniqueEntityID } from "./core/unique-entity-id";
import type { UserOTPNumber } from "./value-objects/user-otp";
import type { UserOTPType } from "./value-objects/user-otp-type";

export interface UserOTPProps {
  id?: UniqueEntityID;
  userId: UniqueEntityID;
  otp: UserOTPNumber;
  type: UserOTPType;
  createdAt: Date;
  expiresAt?: Date;
}

export class UserOTP extends BaseEntity {
  private readonly _props: UserOTPProps;

  constructor(props: Replace<UserOTPProps, { createdAt?: Date }>) {
    super(props.id);
    this._props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  set userId(userId: UniqueEntityID) {
    this._props.userId = userId;
  }

  get userId(): UniqueEntityID {
    return this._props.userId;
  }

  set otp(otp: UserOTPNumber) {
    this._props.otp = otp;
  }

  get otp(): UserOTPNumber {
    return this._props.otp;
  }

  set type(type: UserOTPType) {
    this._props.type = type;
  }

  get type(): UserOTPType {
    return this._props.type;
  }

  get createdAt(): Date {
    return this._props.createdAt;
  }

  public expires(): void {
    const expiresDate = new Date();

    expiresDate.setHours(expiresDate.getHours() + 1);

    this._props.expiresAt = expiresDate;
  }

  get expiresAt(): Date | undefined {
    return this._props.expiresAt;
  }
}
