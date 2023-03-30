import { make } from "simple-body-validator";
import { HttpError } from "@/app/helpers/http-error";
import { type UpdateUserDTO } from "@/app/dtos/users/update-user.dto";

export const validate = (data: UpdateUserDTO): void => {
  const rules = {
    name: ["required"],
    cpf: ["required"],
    phone: ["required"],
  };

  const validator = make().setData(data).setRules(rules);

  if (!validator.stopOnFirstFailure().validate()) {
    throw new HttpError(validator.errors().first(), 422);
  }
};
