import { User } from "@/domain/entities/user";

export interface UpdateUserRepository {
  update(id: string, user: User): Promise<void>;
}
