import { DeleteUserRepository } from '../../repositories/users/DeleteUserRepository'

export class DeleteUserService {
  constructor (private readonly repository: DeleteUserRepository) {}

  async execute (id: string) {
    return await this.repository.delete(id)
  }
}
