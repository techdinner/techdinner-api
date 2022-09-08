import { User } from '../../entities/User'

export interface FindUserByEmailRepository {
  findByEmail: (email: string) => Promise<User | undefined>
}
