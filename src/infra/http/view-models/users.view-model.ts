import type { User } from "@/domain/entities/user";

export class UsersViewModel {
  static toHTTP(user: User | null): any {
    return {
      // id: user?.id.value,
      name: user?.name,
      email: user?.email.value,
      cpf: user?.cpf.value,
      phone: user?.phone.value,
      companyId: user?.companyId.value,
      role: user?.role.value,
      photo: user?.photo,
      verified: user?.verified,
      createdAt: user?.createdAt,
      updatedAt: user?.updatedAt,
    };
  }
}
