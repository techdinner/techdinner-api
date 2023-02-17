import { make } from "simple-body-validator";
import { HttpError } from "@/app/helpers/http-error";
import { LoginDTO } from "@/app/dtos/auth/login.dto";

export const validate = (data: LoginDTO): void => {
  const rules = {
    email: ["required", "email"],
    password: ["required", "min:8"],
  };

  const validator = make().setData(data).setRules(rules);

  if (!validator.stopOnFirstFailure().validate()) {
    throw new HttpError(validator.errors().first(), 422);
  }
};
