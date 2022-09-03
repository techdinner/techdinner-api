import { BaseEntity } from "./BaseEntity";

// interface UserEntityProps {
// 	id?: string;
// 	name: string;
// 	email: string;
// 	password: string;
// 	active?: boolean;
// 	role?: number;
// 	created_at?: Date;
// 	updated_at?: Date;
// }

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
	}
}
