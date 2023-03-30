import { UniqueEntityID } from "./unique-entity-id";

export abstract class BaseEntity {
  private readonly _id: UniqueEntityID;

  constructor(id?: UniqueEntityID) {
    this._id = id ?? new UniqueEntityID();
  }

  get id(): UniqueEntityID {
    return this._id;
  }

  equals(object: BaseEntity): boolean {
    if (!(object instanceof BaseEntity)) {
      return false;
    }

    if (this === object) {
      return true;
    }

    return this._id.equals(object._id);
  }
}
