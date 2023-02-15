import { randomUUID } from "node:crypto";
import { CreateUserController } from "@/app/controllers/users/create-user.controller";
import { CreateUserServiceMock } from "@tests/mocks/services/create-user.mock";
import { User } from "@/domain/entities/user";

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
      password: "88882788a",
      cpf: "084.277.445-95",
      phone: "71983868607",
      companyId: randomUUID(),
      role: "ADMIN",
    });

    expect(response.statusCode).toBe(201);
  });

  test("Should execute create user service", async () => {
    const { sut, createUserService } = makeSut();

    const userServiceSpy = jest.spyOn(createUserService, "execute");

    const user: User = {
      name: "Matheus",
      email: "teste@gmail.com",
      password: "88882788a",
      cpf: "084.277.445-95",
      phone: "71983868607",
      companyId: randomUUID(),
      role: "ADMIN",
    };

    await sut.handle(user);

    expect(userServiceSpy).toHaveBeenCalled();
    expect(userServiceSpy).toHaveBeenCalledWith(user);
  });
});
