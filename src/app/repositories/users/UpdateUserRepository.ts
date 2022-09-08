import { User } from '../../entities/User'

export interface UpdateUserRepository {
  update: (id: string, user: User) => Promise<void>
}
