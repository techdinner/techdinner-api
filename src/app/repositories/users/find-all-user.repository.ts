import type { User } from "@/domain/entities/user";

export interface FindAllUserRepository {
  findAllUsers(): Promise<User[] | null>;
}
