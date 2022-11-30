import { User } from "@/domain/entities/User";

export interface FindAllUser {
  execute(): Promise<User[] | undefined>;
}
