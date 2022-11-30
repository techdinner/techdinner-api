import { CreateUserService } from "@/app/services/users/CreateUserService";
import { CreateUserRepository } from "@/app/repositories/users/CreateUserRepository";
import { FindUserByEmailRepository } from "@/app/repositories/users/FindUserByEmailRepository";
import { User } from "@/domain/entities/User";

class CreateUserRepositoryMock implements CreateUserRepository {
  public user: User;

  async create(user: User): Promise<void> {
    await new Promise(() => console.log("execute"));
    this.user = user;
  }
}

class FindUserByEmailRepositoryMock implements FindUserByEmailRepository {
  public user: User[] = [];

  async findByEmail(email: string): Promise<User | undefined> {
    await new Promise(() => console.log("findByEmail"));
    const user = this.user.find(user => user.email === email);

    return user;
  }
}

interface SutTypes {
  sut: CreateUserService;
  createUserRepository: CreateUserRepositoryMock;
}

const makeSut = (): SutTypes => {
  const createUserRepository = new CreateUserRepositoryMock();
  const findUserByEmailRepository = new FindUserByEmailRepositoryMock();
  const sut = new CreateUserService(
    createUserRepository,
    findUserByEmailRepository,
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
      cpf: "084.277.445-95",
      phone: 71983868607,
      companyId: 1,
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
