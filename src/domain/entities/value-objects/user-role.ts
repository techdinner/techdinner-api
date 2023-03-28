import { HttpError } from "@/app/helpers/http-error";
import { Roles } from "@/app/enums/roles.enum";

export class UserRole {
  private readonly _role: string;

  private readonly _validRoles: string[] = ["ADMIN"];

  get value(): string {
    return this._role;
  }

  private _isValidRoles(role: string): boolean {
    return this._validRoles.includes(role);
  }

  public isAdmin(): boolean {
    return this._role === Roles.ADMIN;
  }

  constructor(role: string) {
    const upperCaseRole = role.toUpperCase();

    if (!this._isValidRoles(upperCaseRole)) {
      throw new HttpError("Role is't valid.", 400);
    }

    this._role = role;
  }
}
