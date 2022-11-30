import { User } from "@/domain/entities/User";

export interface FindAllUserRepository {
  findAllUsers(): Promise<User[] | undefined>;
}
