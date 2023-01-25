import { CreateUserService } from "@/app/services/users/create-user.service";
import { CreateUserRepository } from "@/app/repositories/users/create-user.repository";
import { HashRepository } from "@/app/repositories/crypt/hash.repository";
import { FindUserByEmailRepository } from "@/app/repositories/users/find-user-by-email.repository";
import { User } from "@/domain/entities/user";

class CreateUserRepositoryMock implements CreateUserRepository {
  public user: User;

  async create(user: User): Promise<boolean> {
    await new Promise(() => console.log("execute"));
    this.user = user;

    return true;
  }
}

class FindUserByEmailRepositoryMock implements FindUserByEmailRepository {
  public user: User[] = [];

  async findByEmail(email: string): Promise<User | null> {
    await new Promise(() => console.log("findByEmail"));
    const user = this.user.find(user => user.email === email);

    if (user) {
      return user;
    } else {
      return null;
    }
  }
}

class HashRepositoryMock implements HashRepository {
  hash(string: string): Promise<string> {
    throw new Error("Method not implemented.");
  }
}

interface SutTypes {
  sut: CreateUserService;
  createUserRepository: CreateUserRepositoryMock;
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

  return { sut, createUserRepository };
};

describe("Create user service", () => {
  test("Should be able to create a new user", async () => {
    const { sut, createUserRepository } = makeSut();

    const createUserRepositorySpy = jest.spyOn(createUserRepository, "create");

    await sut.execute({
      name: "Matheus",
      email: "teste@gmail.com",
      password: "88882788a",
      cpf: "084.277.445-95",
      phone: "71983868607",
      companyId: "1",
      role: "ADMIN",
      verified: true,
    });

    expect(createUserRepositorySpy).toHaveBeenCalled();
  });

  // test("Should not be able to create an existing user", async () => {
  // 	const { sut } = makeSut();

  // 	await sut.execute({
  // 		name: "Matheus",
  // 		email: "teste@gmail.com",
  // 		cpf: "084.277.445-95",
  // 		phone: 71983868607,
  // 		company_id: 1,
  // 	});

  // 	await expect(
  // 		sut.execute({
  // 			name: "Matheus",
  // 			email: "teste@gmail.com",
  // 			cpf: "084.277.445-95",
  // 			phone: 71983868607,
  // 			company_id: 1,
  // 		}),
  // 	).rejects.toThrow(new Error("User already exists!"));
  // });
});
