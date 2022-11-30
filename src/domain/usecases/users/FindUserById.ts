import { User } from "@/domain/entities/User";

export interface FindUserById {
  execute(id: string): Promise<User | undefined>;
}
