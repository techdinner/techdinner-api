import { Router } from 'express'

import { authController } from '../../app/factories/auth/Auth'

const AuthRoutes = Router()

AuthRoutes.post('/', async (req, res) => await authController.handle(req, res))

export default AuthRoutes
