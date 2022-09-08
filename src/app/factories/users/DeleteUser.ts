import { MysqlDeleteUserRepository } from '../../../infra/mysql/users/MysqlDeleteUserRepository'
import { DeleteUserService } from '../../services/users/DeleteUserService'
import { DeleteUserController } from '../../controllers/users/DeleteUserController'

const repository = new MysqlDeleteUserRepository()

const service = new DeleteUserService(repository)

const deleteUserController = new DeleteUserController(service)

export { deleteUserController }
