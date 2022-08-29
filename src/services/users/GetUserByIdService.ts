import { IUserRepository } from "../../repositories/IUserRepository";

export class GetUserByIdService {
	constructor(private repository: IUserRepository) {}

	execute = async (id: number) => {
		const user = await this.repository.getById(id);

		return {
			id: user.id,
			name: user.name,
			email: user.email,
			active: user.active,
		};
	};
}
