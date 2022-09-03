import { UserRepository } from "../../repositories/UserRepository";

export class GetUserByIdService {
	constructor(private repository: UserRepository) {}

	async execute(id: string) {
		const user = await this.repository.getById(id);

		return {
			id: user?.id,
			name: user?.name,
			email: user?.email,
			active: user?.active,
			role: user?.role,
		};
	}
}
