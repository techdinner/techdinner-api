import { CreateUserController } from "@/app/controllers/users/CreateUserController";
import { CreateUserDTO } from "@/app/dtos/users/CreateUserDTO";
import { CreateUser } from "@/domain/usecases/users/CreateUser";

class CreateUserServiceMock implements CreateUser {
  public data: CreateUserDTO;

  async execute(data: CreateUserDTO): Promise<void> {
    await new Promise(() => console.log("execute"));
    this.data = data;
  }
}

interface SutTypes {
  sut: CreateUserController;
  createUserService: CreateUserServiceMock;
}

const makeSut = (): SutTypes => {
  const createUserService = new CreateUserServiceMock();
  const sut = new CreateUserController(createUserService);

  return { createUserService, sut };
};

describe("Create user controller", () => {
  test("Should return status code 201 when succeeds", async () => {
    const { sut } = makeSut();

    const response = await sut.handle({
      name: "Matheus",
      email: "teste@gmail.com",
      cpf: "084.277.445-95",
      phone: "71983868607",
      role: "ADMIN",
      password: "88882788a",
      companyId: "1",
    });

    expect(response.statusCode).toBe(201);
  });

  test("Should execute create user service", async () => {
    const { sut, createUserService } = makeSut();

    const userServiceSpy = jest.spyOn(createUserService, "execute");

    await sut.handle({
      name: "Matheus",
      email: "teste@gmail.com",
      cpf: "084.277.445-95",
      phone: "71983868607",
      role: "ADMIN",
      password: "88882788a",
      companyId: "1",
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
