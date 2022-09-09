import { FindUserByEmailRepository } from "../../repositories/users/FindUserByEmailRepository";
import { User } from "../../entities/User";
import { sign } from "jsonwebtoken";
import { compare } from "bcryptjs";

interface Request {
	email: string;
	password: string;
}

export class AuthService {
	constructor(
		private readonly findUserByEmailRepository: FindUserByEmailRepository,
	) {}

	private userIsNotProvided(user: User | undefined): boolean {
		return user == null;
	}

	async execute({
		email,
		password,
	}: Request): Promise<{ token: string; user: User }> {
		const user = await this.findUserByEmailRepository.findByEmail(email);

		if (this.userIsNotProvided(user)) throw new Error("Credenciais inválidas");

		const passwordCompare = await compare(password, user?.password as string);

		if (!passwordCompare) throw new Error("Credenciais inválidas");

		if (!user?.active) throw new Error("Usuário inativo");

		const token = sign({}, process.env.APP_SECRET as string, {
			expiresIn: "1d",
		});

		// delete user.password;

		return { token, user };
	}
}
