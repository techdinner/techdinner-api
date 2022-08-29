export class UserEntity {
	constructor(
		public name: string,
		public email: string,
		public password: string,
		public active?: boolean,
		public readonly id?: number,
	) {}
}
