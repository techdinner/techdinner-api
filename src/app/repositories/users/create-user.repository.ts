import type { User } from "@/domain/entities/user";

export interface CreateUserRepository {
  create(user: User): Promise<boolean>;
}
