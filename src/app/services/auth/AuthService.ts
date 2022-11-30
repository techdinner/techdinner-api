import { sign } from "jsonwebtoken";
import { compare } from "bcryptjs";
import { FindUserByEmailRepository } from "@/app/repositories/users/FindUserByEmailRepository";
import { User } from "@/domain/entities/User";

interface Request {
  email: string;
  password: string;
}

export class AuthService {
  constructor(
    private readonly _findUserByEmailRepository: FindUserByEmailRepository,
  ) {}

  private _userIsNotProvided(user: User | undefined): boolean {
    return user == null;
  }

  async execute({ email, password }: Request): Promise<{ token: string }> {
    const user = await this._findUserByEmailRepository.findByEmail(email);

    if (this._userIsNotProvided(user)) throw new Error("Credenciais inválidas");

    const passwordCompare = await compare(password, user?.password as string);

    if (!passwordCompare) throw new Error("Credenciais inválidas");

    const token = sign({}, process.env.APP_SECRET as string, {
      expiresIn: "1d",
    });

    return { token };
  }
}
