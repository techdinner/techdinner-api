import { User } from "@/domain/entities/User";

export interface CreateUserRepository {
  create(user: User): Promise<void>;
}
