import { User } from "../../../domain/entities/User";
import { GetAllUserRepository } from "../../repositories/users/GetAllUserRepository";

export class GetAllUserService {
	constructor(private readonly getAllUserRepository: GetAllUserRepository) {}

	async execute(): Promise<User[] | undefined> {
		return await this.getAllUserRepository.getAllUsers();
	}
}
