import { BaseEntity } from "./BaseEntity";

export class User extends BaseEntity {
	constructor(
		public name: string,
		public email: string,
		public cpf: string,
		public phone: number,
		public company_id: number,
		public photo?: string,
		public password?: string,
		public id?: string,
	) {
		super(id);
	}
}
