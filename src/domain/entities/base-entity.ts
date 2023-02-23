import { randomUUID } from "node:crypto";

export abstract class BaseEntity {
  public readonly id?: string;

  constructor(id?: string) {
    this.id = id ?? randomUUID();
  }
}
