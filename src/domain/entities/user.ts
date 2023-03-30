import type { Replace } from "@/app/helpers/replace";
import { environments } from "@/config/dotenv";
import { BaseEntity } from "./core/base-entity";
import type { UniqueEntityID } from "./core/unique-entity-id";
import type { UserEmail } from "./value-objects/user-email";
import type { UserPassword } from "./value-objects/user-password";
import type { UserPhone } from "./value-objects/user-phone";
import type { UserRole } from "./value-objects/user-role";
import type { UserCPF } from "./value-objects/user-cpf";

export interface UserProps {
  id?: UniqueEntityID;
  name: string;
  email: UserEmail;
  password: UserPassword;
  cpf: UserCPF;
  phone: UserPhone;
  companyId: UniqueEntityID;
  role: UserRole;
  photo?: string | null;
  verified: boolean;
  createdAt: Date;
  updatedAt?: Date;
}

export class User extends BaseEntity {
  private readonly _props: UserProps;

  constructor(props: Replace<UserProps, { createdAt?: Date }>) {
    super(props.id);
    this._props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  set name(name: string) {
    this._props.name = name;
  }

  get name(): string {
    return this._props.name;
  }

  set email(email: UserEmail) {
    this._props.email = email;
  }

  get email(): UserEmail {
    return this._props.email;
  }

  set password(password: UserPassword) {
    this._props.password = password;
  }

  get password(): UserPassword {
    return this._props.password;
  }

  set cpf(cpf: UserCPF) {
    this._props.cpf = cpf;
  }

  get cpf(): UserCPF {
    return this._props.cpf;
  }

  set phone(phone: UserPhone) {
    this._props.phone = phone;
  }

  get phone(): UserPhone {
    return this._props.phone;
  }

  set companyId(companyId: UniqueEntityID) {
    this._props.companyId = companyId;
  }

  get companyId(): UniqueEntityID {
    return this._props.companyId;
  }

  set role(role: UserRole) {
    this._props.role = role;
  }

  get role(): UserRole {
    return this._props.role;
  }

  set photo(photo: string | null | undefined) {
    this._props.photo = photo;
  }

  get photo(): string | null {
    return this._props.photo
      ? `${environments.APP_HOST}:${environments.APP_PORT}/${this._props.photo}`
      : null;
  }

  set verified(verified: boolean) {
    this._props.verified = verified;
  }

  get verified(): boolean {
    return this._props.verified;
  }

  get createdAt(): Date {
    return this._props.createdAt;
  }

  public update(): void {
    this._props.updatedAt = new Date();
  }

  get updatedAt(): Date | undefined {
    return this._props.updatedAt;
  }
}
