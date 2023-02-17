import { make } from "simple-body-validator";
import { HttpError } from "@/app/helpers/http-error";
import { VerifyCodeDTO } from "@/app/dtos/auth/verify-code.dto";

export const validate = (data: VerifyCodeDTO): void => {
  const rules = {
    userId: ["required"],
    otp: ["required", "max:4"],
    type: ["required"],
  };

  const validator = make().setData(data).setRules(rules);

  if (!validator.stopOnFirstFailure().validate()) {
    throw new HttpError(validator.errors().first(), 422);
  }
};
