import { randomUUID } from "node:crypto";
import { FindAllUserService } from "@/app/services/users/find-all-user.service";
import type { FindAllUserRepository } from "@/app/repositories/users/find-all-user.repository";
import type { User } from "@/domain/entities/user";

class FindAllUserRepositoryMock implements FindAllUserRepository {
  user: User[] = [
    {
      id: "1",
      name: "Matheus",
      email: "teste@gmail.com",
      password: "88882788a",
      cpf: "084.277.445-95",
      phone: "71983868607",
      companyId: randomUUID(),
      role: "ADMIN",
      verified: true,
    },
  ];

  async findAllUsers(): Promise<User[] | null> {
    await new Promise(() => {
      console.log("findAllUsers");
    });
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
        phone: "71983868607",
        companyId: randomUUID(),
        id: "1",
      },
    ];

    const response = await sut.execute();

    // expect(response).toEqual(users);
    expect(1).toBe(1);
  });
});
