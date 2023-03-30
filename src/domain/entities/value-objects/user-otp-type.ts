import { HttpError } from "@/app/helpers/http-error";

export class UserOTPType {
  private readonly _type: string;

  private readonly _validTypes: string[] = ["LOGIN", "SIGN_UP"];

  get value(): string {
    return this._type;
  }

  private _isValidTypes(type: string): boolean {
    return this._validTypes.includes(type);
  }

  constructor(type: string) {
    const upperCaseType = type.toUpperCase();

    if (!this._isValidTypes(upperCaseType)) {
      throw new HttpError("Type is't valid.", 400);
    }

    this._type = type;
  }
}
