import { randomUUID } from "node:crypto";

export class UniqueEntityID {
  private readonly _id: string;

  constructor(id?: string) {
    this._id = id ?? randomUUID();
  }

  get value(): string {
    return this._id;
  }

  equals(id: UniqueEntityID): boolean {
    return id.value === this._id;
  }
}
