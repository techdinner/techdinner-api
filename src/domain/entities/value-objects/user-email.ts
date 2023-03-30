import { HttpError } from "@/app/helpers/http-error";

export class UserEmail {
  private readonly _email: string;

  get value(): string {
    return this._email;
  }

  private _validateEmailLength(email: string): boolean {
    return email.length >= 5 && email.length <= 255;
  }

  constructor(email: string) {
    const isEmailLengthValid = this._validateEmailLength(email);

    if (!isEmailLengthValid) {
      throw new HttpError("E-mail length is invalid.", 400);
    }

    this._email = email;
  }
}
