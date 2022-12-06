import { FindAllUserService } from "@/app/services/users/FindAllUserService";
import { FindAllUserRepository } from "@/app/repositories/users/FindAllUserRepository";
import { User } from "@/domain/entities/User";

class FindAllUserRepositoryMock implements FindAllUserRepository {
  public user: User[] = [
    {
      name: "Matheus",
      email: "teste@gmail.com",
      cpf: "084.277.445-95",
      phone: "71983868607",
      role: "ADMIN",
      password: "88882788a",
      companyId: "1",
      id: "1",
    },
  ];

  async findAllUsers(): Promise<User[] | undefined> {
    await new Promise(() => console.log("findAllUsers"));
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
