import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { UserEntity } from "../../entities/UserEntity";
import { AppError } from "../../errors/AppError";
import { TypeORMUserRepository } from "../../repositories/implementations/typeorm/TypeORMUserRepository";
import { IUserRepository } from "../../repositories/IUserRepository";

interface Request {
	email: string;
	password: string;
}

interface Response {
	token: string;
	user: UserEntity;
}

export class AuthService {
	private repository: IUserRepository;

	constructor(repository: TypeORMUserRepository) {
		this.repository = repository;
	}

	execute = async ({ email, password }: Request): Promise<Response> => {
		const user = await this.repository.findByEmail(email);

		if (!user) throw new AppError("Credenciais inválidas", 401);

		const passwordCompare = await compare(password, user.password);

		if (!passwordCompare) throw new AppError("Credenciais inválidas", 401);

		if (!user.active) throw new AppError("Usuário inativo", 401);

		const token = sign({}, process.env.APP_SECRET as string, {
			expiresIn: "1d",
		});

		delete user.password;

		return { token, user };
	};
}
