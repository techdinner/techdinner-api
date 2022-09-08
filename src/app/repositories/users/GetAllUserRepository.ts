import { User } from '../../entities/User'

export interface GetAllUserRepository {
  getAllUsers: () => Promise<User[] | undefined>
}
