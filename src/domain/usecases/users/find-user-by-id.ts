import { User } from "@/domain/entities/user";

export interface FindUserById {
  execute(id: string): Promise<User | null>;
}
