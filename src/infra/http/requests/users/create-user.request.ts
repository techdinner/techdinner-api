import { make } from "simple-body-validator";
import { HttpError } from "@/app/helpers/http-error";
import { type CreateUserDTO } from "@/app/dtos/users/create-user.dto";

export const validate = (data: CreateUserDTO): void => {
  const rules = {
    name: ["required"],
    email: ["required", "email"],
    password: ["required", "min:8"],
    cpf: ["required"],
    phone: ["required"],
    companyId: ["required"],
    role: ["required"],
  };

  const validator = make().setData(data).setRules(rules);

  if (!validator.stopOnFirstFailure().validate()) {
    throw new HttpError(validator.errors().first(), 422);
  }
};
