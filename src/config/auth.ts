import { environments } from "./dotenv";

export const auth = {
  secret: String(environments.SECRET),
  expires: "24h",
};
