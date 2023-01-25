import { DeleteUserService } from "@/app/services/users/delete-user.service";
import { DeleteUserRepository } from "@/app/repositories/users/delete-user.repository";
import { FindUserByIdRepository } from "@/app/repositories/users/find-user-by-id.repository";
import { User } from "@/domain/entities/user";

class DeleteUserRepositoryMock implements DeleteUserRepository {
  public user: User[] = [
    {
      id: "1",
      name: "Matheus",
      email: "teste@gmail.com",
      password: "88882788a",
      cpf: "084.277.445-95",
      phone: "71983868607",
      companyId: "1",
      role: "ADMIN",
      verified: true,
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
      id: "1",
      name: "Matheus",
      email: "teste@gmail.com",
      password: "88882788a",
      cpf: "084.277.445-95",
      phone: "71983868607",
      companyId: "1",
      role: "ADMIN",
      verified: true,
    },
  ];

  async findById(id: string): Promise<User | null> {
    await new Promise(() => console.log("findById"));
    const user = this.user.find(user => user.id === id);

    if (user) {
      return user;
    } else {
      return null;
    }
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
