import type { User } from "@/domain/entities/user";

export interface FindUserByIdRepository {
  findById(id: string): Promise<User | null>;
}
