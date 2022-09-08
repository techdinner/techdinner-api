import { Router } from 'express'

import { getAllUserController } from '../../app/factories/users/GetAllUser'
import { createUserController } from '../../app/factories/users/CreateUser'
import { findUserByIdController } from '../../app/factories/users/FindUserById'
import { updateUserController } from '../../app/factories/users/UpdateUser'
import { deleteUserController } from '../../app/factories/users/DeleteUser'

const UsersRoutes = Router()

UsersRoutes.get('/', async (req, res) => await getAllUserController.handle(req, res))
UsersRoutes.post('/', async (req, res) => await createUserController.handle(req, res))
UsersRoutes.get('/:id', async (req, res) => await findUserByIdController.handle(req, res))
UsersRoutes.put('/:id', async (req, res) => await updateUserController.handle(req, res))
UsersRoutes.delete('/:id', async (req, res) => await deleteUserController.handle(req, res))

export default UsersRoutes
