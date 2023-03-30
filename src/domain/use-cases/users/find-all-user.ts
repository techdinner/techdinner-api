import { type User } from "@/domain/entities/user";

export interface FindAllUser {
  execute(): Promise<User[] | null>;
}
