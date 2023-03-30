import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("users_otp")
export class UserOTP {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @Column({ name: "user_id", type: "uuid" })
  userId!: string;

  @Column()
  otp!: string;

  @Column()
  type!: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt!: Date;

  @Column({ name: "expires_at" })
  expiresAt?: Date;
}
