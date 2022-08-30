import { IUserRepository } from "../../repositories/IUserRepository";

export class GetUserByIdService {
	constructor(private repository: IUserRepository) {}

	async execute(id: string) {
		const user = await this.repository.getById(id);

		return {
			id: user.id,
			name: user.name,
			email: user.email,
			active: user.active,
			role: user.role,
		};
	}
}
