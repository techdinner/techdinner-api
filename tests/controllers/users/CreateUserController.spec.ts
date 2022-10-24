import { CreateUserController } from "@controllers/users/CreateUserController";
import { CreateUserDTO } from "@dtos/users/CreateUserDTO";
import { CreateUser } from "@usecases/users/CreateUser";

class CreateUserServiceMock implements CreateUser {
	public data: CreateUserDTO;

	async execute(data: CreateUserDTO): Promise<void> {
		this.data = data;
	}
}

interface SutTypes {
	sut: CreateUserController;
	userService: CreateUserServiceMock;
}

const makeSut = (): SutTypes => {
	const userService = new CreateUserServiceMock();
	const sut = new CreateUserController(userService);

	return { userService, sut };
};

describe("Create user controller", () => {
	test("Should return status code 201 when succeeds", async () => {
		const { sut } = makeSut();

		const response = await sut.handle({
			name: "Matheus",
			email: "teste@gmail.com",
			cpf: "084.277.445-95",
			phone: 71983868607,
			company_id: 1,
		});

		expect(response.statusCode).toBe(201);
	});

	test("Should execute create user service", async () => {
		const { sut, userService } = makeSut();

		const userServiceSpy = jest.spyOn(userService, "execute");

		await sut.handle({
			name: "Matheus",
			email: "teste@gmail.com",
			cpf: "084.277.445-95",
			phone: 71983868607,
			company_id: 1,
		});

		expect(userServiceSpy).toHaveBeenCalled();

		expect(userServiceSpy).toHaveBeenCalledWith({
			name: "Matheus",
			email: "teste@gmail.com",
			cpf: "084.277.445-95",
			phone: 71983868607,
			company_id: 1,
		});
	});
});
