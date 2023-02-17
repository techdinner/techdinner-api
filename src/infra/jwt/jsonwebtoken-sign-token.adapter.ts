import { sign } from "jsonwebtoken";
import {
  SignTokenRepository,
  Secret,
  SignOptions,
} from "@/app/repositories/jwt/sign-token.repository";

export class JsonWebTokenSignTokenAdapter implements SignTokenRepository {
  sign(
    payload: string | Buffer | object,
    secretOrPrivateKey: Secret,
    options?: SignOptions,
  ): string {
    return sign(payload, secretOrPrivateKey, options);
  }
}
