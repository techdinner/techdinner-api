import type { Replace } from "@/app/helpers/replace";
import { BaseEntity } from "./core/base-entity";
import type { UniqueEntityID } from "./core/unique-entity-id";

export interface UserOTPProps {
  id?: UniqueEntityID;
  userId: UniqueEntityID;
  otp: string;
  type: string;
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

  set otp(otp: string) {
    this._props.otp = otp;
  }

  get otp(): string {
    return this._props.otp;
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
