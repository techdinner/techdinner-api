import { randomUUID } from "node:crypto";
import { CreateUserService } from "@/app/services/users/create-user.service";
import { CreateUserRepositoryMock } from "@tests/mocks/repositories/users/create-user.repository.mock";
import { FindUserByEmailRepositoryMock } from "@tests/mocks/repositories/users/find-user-by-email.repository.mock";
import { HashRepositoryMock } from "@tests/mocks/repositories/crypt/hash.repository.mock";
import { HttpError } from "@/app/helpers/http-error";
import { type User } from "@/domain/entities/user";

interface SutTypes {
  sut: CreateUserService;
  createUserRepository: CreateUserRepositoryMock;
  findUserByEmailRepository: FindUserByEmailRepositoryMock;
}

const makeSut = (): SutTypes => {
  const createUserRepository = new CreateUserRepositoryMock();
  const findUserByEmailRepository = new FindUserByEmailRepositoryMock();
  const hashRepository = new HashRepositoryMock();
  const sut = new CreateUserService(
    createUserRepository,
    findUserByEmailRepository,
    hashRepository,
  );

  return { sut, createUserRepository, findUserByEmailRepository };
};

describe("Create user service", () => {
  test("Should be able to create a new user", async () => {
    const { sut, createUserRepository, findUserByEmailRepository } = makeSut();

    const createUserRepositorySpy = jest.spyOn(createUserRepository, "create");

    const user: User = {
      name: "Matheus",
      email: "teste@gmail.com",
      password: "88882788a",
      cpf: "084.277.445-95",
      phone: "71983868607",
      companyId: randomUUID(),
      role: "ADMIN",
    };

    await sut.execute(user);

    expect(createUserRepositorySpy).toHaveBeenCalled();
    expect(findUserByEmailRepository.users).toHaveLength(1);
    expect(findUserByEmailRepository.users[0]).toEqual(user);
  });

  test("Should not be able to create an existing user", async () => {
    const { sut } = makeSut();

    const user: User = {
      name: "Matheus",
      email: "teste@gmail.com",
      password: "88882788a",
      cpf: "084.277.445-95",
      phone: "71983868607",
      companyId: randomUUID(),
      role: "ADMIN",
    };

    await sut.execute(user);

    expect(async () => {
      await sut.execute(user);
    }).rejects.toThrow(
      new HttpError("The email is invalid or has already been used.", 400),
    );
  });

  test("Should be password hashed and verified is true", async () => {
    const { sut, findUserByEmailRepository } = makeSut();

    const user: User = {
      name: "Matheus",
      email: "teste@gmail.com",
      password: "88882788a",
      cpf: "084.277.445-95",
      phone: "71983868607",
      companyId: randomUUID(),
      role: "ADMIN",
    };

    await sut.execute(user);

    expect(findUserByEmailRepository.users[0].password).not.toEqual(
      user.password,
    );
    expect(findUserByEmailRepository.users[0].verified).toEqual(true);
  });
});
