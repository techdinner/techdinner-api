import { FindAllUserService } from "@services/users/FindAllUserService";
import { FindAllUserRepository } from "@repositories/users/FindAllUserRepository";
import { User } from "@entities/User";

class FindAllUserRepositoryMock implements FindAllUserRepository {
	public user: User[] = [
		{
			name: "Matheus",
			email: "teste@gmail.com",
			cpf: "084.277.445-95",
			phone: 71983868607,
			company_id: 1,
			id: "1",
		},
	];

	async findAllUsers(): Promise<User[] | undefined> {
		return this.user;
	}
}

const makeSut = (): { sut: FindAllUserService } => {
	const findAllUserRepository = new FindAllUserRepositoryMock();
	const sut = new FindAllUserService(findAllUserRepository);

	return { sut };
};

describe("Find all user service", () => {
	test("Should fetch all users", async () => {
		const { sut } = makeSut();

		const users = [
			{
				name: "Matheus",
				email: "teste@gmail.com",
				cpf: "084.277.445-95",
				phone: 71983868607,
				company_id: 1,
				id: "1",
			},
		];

		const response = await sut.execute();

		expect(response).toEqual(users);
	});
});
