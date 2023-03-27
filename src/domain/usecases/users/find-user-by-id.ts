import type { User } from "@/domain/entities/user";
import type { FindUserByIdDTO } from "@/app/dtos/users/find-user-by-id.dto";

export interface FindUserById {
  execute(data: FindUserByIdDTO): Promise<User | null>;
}
