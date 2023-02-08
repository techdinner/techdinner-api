import { User } from "@/domain/entities/user";

export interface FindAllUser {
  execute(): Promise<User[] | null>;
}
