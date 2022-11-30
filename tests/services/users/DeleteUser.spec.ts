import { DeleteUserService } from "@/app/services/users/DeleteUserService";
import { DeleteUserRepository } from "@/app/repositories/users/DeleteUserRepository";
import { FindUserByIdRepository } from "@/app/repositories/users/FindUserByIdRepository";
import { User } from "@/domain/entities/User";

class DeleteUserRepositoryMock implements DeleteUserRepository {
  public user: User[] = [
    {
      name: "Matheus",
      email: "teste@gmail.com",
      cpf: "084.277.445-95",
      phone: 71983868607,
      companyId: 1,
      id: "1",
    },
  ];

  async delete(id: string): Promise<void> {
    await new Promise(() => console.log("delete"));
    // const user = this.user.find(user => user.id === id);
  }
}

class FindUserByIdRepositoryMock implements FindUserByIdRepository {
  public user: User[] = [
    {
      name: "Matheus",
      email: "teste@gmail.com",
      cpf: "084.277.445-95",
      phone: 71983868607,
      companyId: 1,
      id: "1",
    },
  ];

  async findById(id: string): Promise<User | undefined> {
    await new Promise(() => console.log("findById"));
    return this.user.find(user => user.id === id);
  }
}

interface SutTypes {
  sut: DeleteUserService;
  deleteUserRepository: DeleteUserRepositoryMock;
}

const makeSut = (): SutTypes => {
  const deleteUserRepository = new DeleteUserRepositoryMock();
  const findUserByIdRepository = new FindUserByIdRepositoryMock();
  const sut = new DeleteUserService(
    deleteUserRepository,
    findUserByIdRepository,
  );

  return { sut, deleteUserRepository };
};

describe("Delete user service", () => {
  test("Should return error when user does not exists", async () => {
    const { sut } = makeSut();

    const response = await sut.execute("2");

    expect(response).toThrowError("User not exists");
  });

  test("Should delete user by id", async () => {
    const { sut, deleteUserRepository } = makeSut();

    const deleteUserRepositorySpy = jest.spyOn(deleteUserRepository, "delete");

    await sut.execute("1");

    expect(deleteUserRepositorySpy).toHaveBeenCalled();
  });
});
