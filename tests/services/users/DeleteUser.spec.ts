import { DeleteUserService } from "@services/users/DeleteUserService";
import { DeleteUserRepository } from "@repositories/users/DeleteUserRepository";
import { User } from "@entities/User";

class DeleteUserRepositoryMock implements DeleteUserRepository {
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

	async delete(id: string): Promise<void> {
		const user = this.user.find(user => user.id === id);
	}
}

const makeSut = (): { sut: DeleteUserService } => {
	const deleteUserRepository = new DeleteUserRepositoryMock();
	const sut = new DeleteUserService(deleteUserRepository);

	return { sut };
};

describe("Delete user service", () => {
	test("Should delete user by id", async () => {
		const { sut } = makeSut();

		const response = await sut.execute("id");

		expect(response).toBeTruthy();
	});
});
