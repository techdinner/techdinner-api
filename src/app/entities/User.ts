import { BaseEntity } from "./BaseEntity";

export class User extends BaseEntity {
	constructor(
		public name: string,
		public email: string,
		public role: number,
		public password?: string,
		public active?: boolean,
		public created_at?: Date,
		public updated_at?: Date,
		id?: string,
	) {
		super(id);
		this.active = active ?? false;
	}
}
