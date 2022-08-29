import { TypeORMUserEntity } from "../entities/typeorm/TypeORMUserEntity";

export interface IUserRepository {
	findByEmail: (email: string) => Promise<TypeORMUserEntity>;
	getAllUsers: () => Promise<TypeORMUserEntity[]>;
	create: (user: TypeORMUserEntity) => Promise<void>;
	getById: (id: number) => Promise<TypeORMUserEntity>;
}
