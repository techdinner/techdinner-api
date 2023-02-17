export type Secret =
  | string
  | Buffer
  | { key: string | Buffer; passphrase: string };

export interface SignOptions {
  expiresIn?: string | number | undefined;
}

export interface SignTokenRepository {
  sign(
    payload: string | Buffer | object,
    secretOrPrivateKey: Secret,
    options?: SignOptions,
  ): string;
}
