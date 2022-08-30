import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { Exception } from "../../errors/Exception";
import { IUserRepository } from "../../repositories/IUserRepository";

interface Request {
	email: string;
	password: string;
}

export class AuthService {
	constructor(private repository: IUserRepository) {}

	async execute({ email, password }: Request) {
		try {
			const user = await this.repository.findByEmail(email);

			if (!user) throw new Exception("Credenciais inválidas", 401);

			const passwordCompare = await compare(password, user.password);

			if (!passwordCompare) throw new Exception("Credenciais inválidas", 401);

			if (!user.active) throw new Exception("Usuário inativo", 401);

			const token = sign({}, process.env.APP_SECRET as string, {
				expiresIn: "1d",
			});

			delete user.password;

			return { token, user };
		} catch {
			throw new Exception("Internal server error", 500);
		}
	}
}
