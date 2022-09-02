import { BaseEntity } from "./BaseEntity";

interface UserEntityProps {
	id?: string;
	name: string;
	email: string;
	password: string;
	active: boolean;
	role: number;
	created_at?: Date;
	updated_at?: Date;
}

export class UserEntity extends BaseEntity {
	constructor(private props: UserEntityProps) {
		super(props.id);
		props.active = props.active ?? true;
		props.role = props.role ?? 3;
	}

	get active(): boolean {
		return this.props.active;
	}
}
