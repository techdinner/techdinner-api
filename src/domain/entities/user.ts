import { BaseEntity } from "./base-entity";

export class User extends BaseEntity {
  public name: string;
  public email: string;
  public password: string;
  public cpf: string;
  public phone: string;
  public companyId: string;
  public role: string;
  public photo?: string;
  public verified?: boolean;
  public createdAt?: Date;
  public updatedAt?: Date;

  constructor(props: User) {
    super();
    Object.assign(this, props);
  }
}
