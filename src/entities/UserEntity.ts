import {
	Entity,
	Column,
	CreateDateColumn,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from "typeorm";

@Entity("users")
export class UserEntity {
	@PrimaryGeneratedColumn()
	id?: number;

	@Column()
	name!: string;

	@Column({ unique: true })
	email!: string;

	@Column()
	password!: string;

	@Column({ type: "boolean", default: true })
	active?: boolean;

	@CreateDateColumn()
	created_at?: Date;

	@UpdateDateColumn()
	updated_at?: Date;
}
