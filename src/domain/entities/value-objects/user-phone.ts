import { toOnlyNumbers } from "@/app/helpers/only-numbers";

export class UserPhone {
  private readonly _phone: string;

  get value(): string {
    return this._phone;
  }

  private _format(phone: string): string {
    return toOnlyNumbers(phone);
  }

  constructor(phone: string) {
    this._phone = this._format(phone);
  }
}
