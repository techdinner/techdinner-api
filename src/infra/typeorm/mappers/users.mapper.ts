import { type DeepPartial } from "typeorm";
import { User } from "@/domain/entities/user";
import { UniqueEntityID } from "@/domain/entities/core/unique-entity-id";
import { UserPassword } from "@/domain/entities/value-objects/user-password";
import { UserEmail } from "@/domain/entities/value-objects/user-email";
import { UserCPF } from "@/domain/entities/value-objects/user-cpf";
import { UserPhone } from "@/domain/entities/value-objects/user-phone";
import { UserRole } from "@/domain/entities/value-objects/user-role";
import { BcryptHashAdapter } from "@/infra/bcrypt/bcrypt-hash.adapter";
import type { User as RawUser } from "../entities/user";

export class UsersMapper {
  static async toPersistence(user: User): Promise<DeepPartial<RawUser>> {
    return {
      name: user.name,
      email: user.email.value,
      password: await user?.password?.getHashedValue(),
      cpf: user.cpf.value,
      phone: user.phone.value,
      companyId: user.companyId.value,
      role: user.role.value,
      photo: user.photo,
      verified: user.verified,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }

  static toDomain(raw: RawUser): User {
    return new User({
      id: new UniqueEntityID(raw.id),
      name: raw.name,
      email: new UserEmail(raw.email),
      password: new UserPassword(raw.password, true, new BcryptHashAdapter()),
      cpf: new UserCPF(raw.cpf),
      phone: new UserPhone(raw.phone),
      companyId: new UniqueEntityID(raw.companyId),
      role: new UserRole(raw.role),
      photo: raw.photo,
      verified: raw.verified,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
    });
  }
}
