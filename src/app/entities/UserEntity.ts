import { BaseEntity } from "./BaseEntity";

export class UserEntity extends BaseEntity {
	constructor(
		public name: string,
		public email: string,
		public password: string,
		public active?: boolean,
		public role?: number,
		public created_at?: Date,
		public updated_at?: Date,
		id?: string,
	) {
		super(id);
		this.active = active ?? true;
		this.role = role ?? 3;
		this.created_at = created_at ?? new Date();
		this.updated_at = updated_at ?? new Date();
	}
}
