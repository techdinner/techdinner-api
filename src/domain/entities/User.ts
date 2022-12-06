import { BaseEntity } from "./BaseEntity";

export class User extends BaseEntity {
  public id?: string;
  public name: string;
  public email: string;
  public password: string;
  public cpf: string;
  public phone: string;
  public companyId: string;
  public role: string;
  public photo?: string;
  public createdAt?: Date;
  public updatedAt?: Date;

  constructor(props: User) {
    super(props.id);
    Object.assign(this, props);
  }
}
