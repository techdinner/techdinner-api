import { sign } from "jsonwebtoken";
import {
  type SignTokenRepository,
  type Secret,
  type SignOptions,
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
