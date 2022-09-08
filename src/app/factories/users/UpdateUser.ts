import { MysqlUpdateUserRepository } from '../../../infra/mysql/users/MysqlUpdateUserRepository'
import { UpdateUserService } from '../../services/users/UpdateUserService'
import { UpdateUserController } from '../../controllers/users/UpdateUserController'

const repository = new MysqlUpdateUserRepository()

const service = new UpdateUserService(repository)

const updateUserController = new UpdateUserController(service)

export { updateUserController }
