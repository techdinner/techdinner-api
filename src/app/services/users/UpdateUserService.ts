import { User } from '../../entities/User'
import { UpdateUserRepository } from '../../repositories/users/UpdateUserRepository'
import { UpdateUserDTO } from '../../dtos/users/UpdateUserDTO'
import { hash } from 'bcryptjs'

export class UpdateUserService {
  constructor (private readonly repository: UpdateUserRepository) {}

  async execute (id: string, data: UpdateUserDTO) {
    const passwordHash = await hash(data.password as string, 8)

    if ([data.name, data.email, data.password].join('') !== '') {
      const user = new User(
        data.name as string,
        data.email as string,
        data.role as number,
        passwordHash,
        data?.active
      )

      await this.repository.update(id, user)
    }
  }
}
