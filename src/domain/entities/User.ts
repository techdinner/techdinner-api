import { BaseEntity } from "./BaseEntity";

export class User extends BaseEntity {
  public id?: string;
  public name: string;
  public email: string;
  public cpf: string;
  public phone: number;
  public companyId: number;
  public photo?: string;
  public password?: string;
  public createdAt?: Date;

  constructor(props: User) {
    super(props.id);
    Object.assign(this, props);
  }
}
