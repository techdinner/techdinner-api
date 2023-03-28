import { HttpError } from "@/app/helpers/http-error";
import { cpfValidation } from "@/app/helpers/cpf-validation";
import { toOnlyNumbers } from "@/app/helpers/only-numbers";

export class UserCPF {
  private readonly _cpf: string;

  get value(): string {
    return this._cpf;
  }

  private _isValidCpf(cpf: string): boolean {
    return cpfValidation(cpf);
  }

  private _format(cpf: string): string {
    return toOnlyNumbers(cpf);
  }

  constructor(cpf: string) {
    if (!this._isValidCpf(cpf)) {
      throw new HttpError("CPF is't valid.", 400);
    }

    this._cpf = this._format(cpf);
  }
}
