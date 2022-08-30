import { uuid } from "uuidv4";

export abstract class BaseEntity {
	public readonly id?: string;

	constructor(id?: string) {
		this.id = id ?? uuid();
	}
}
