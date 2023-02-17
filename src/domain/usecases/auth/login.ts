import { LoginDTO } from "@/app/dtos/auth/login.dto";

export interface Login {
  execute(data: LoginDTO): Promise<string>;
}
