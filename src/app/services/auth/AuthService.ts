import { IUserRepository } from "../../repositories/IUserRepository";
import { sign } from "jsonwebtoken";
import { compare } from "bcryptjs";

interface Request {
	email: string;
	password: string;
}

export class AuthService {
	constructor(private repository: IUserRepository) {}

	async execute({ email, password }: Request) {
		const user = await this.repository.findByEmail(email);

		if (!user) throw new Error("Credenciais inválidas");

		const passwordCompare = await compare(password, user.password);

		if (!passwordCompare) throw new Error("Credenciais inválidas");

		if (!user.active) throw new Error("Usuário inativo");

		const token = sign({}, process.env.APP_SECRET as string, {
			expiresIn: "1d",
		});

		// delete user.password;

		return { token, user };
	}
}
