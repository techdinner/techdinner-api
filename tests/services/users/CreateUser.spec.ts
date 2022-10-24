import { CreateUserService } from "@services/users/CreateUserService";
import { CreateUserRepository } from "@repositories/users/CreateUserRepository";
import { FindUserByEmailRepository } from "@repositories/users/FindUserByEmailRepository";
import { User } from "@entities/User";

class CreateUserRepositoryMock implements CreateUserRepository {
	public user: User;

	async create(user: User): Promise<void> {
		this.user = user;
	}
}

class FindUserByEmailRepositoryMock implements FindUserByEmailRepository {
	public user: User[] = [];

	async findByEmail(email: string): Promise<User | undefined> {
		return this.user.find(user => {
			user.email === email;
		});
	}
}

const makeSut = (): { sut: CreateUserService } => {
	const createUserRepository = new CreateUserRepositoryMock();
	const findUserByEmailRepository = new FindUserByEmailRepositoryMock();
	const sut = new CreateUserService(
		createUserRepository,
		findUserByEmailRepository,
	);

	return { sut };
};

describe("Create user service", () => {
	test("Should be able to create a new user", async () => {
		const { sut } = makeSut();

		const response = await sut.execute({
			name: "Matheus",
			email: "teste@gmail.com",
			cpf: "084.277.445-95",
			phone: 71983868607,
			company_id: 1,
		});

		expect(response).toBeTruthy();
	});
});
