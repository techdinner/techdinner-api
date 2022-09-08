import { Request, Response } from 'express'
import { UpdateUserService } from '../../services/users/UpdateUserService'

export class UpdateUserController {
  constructor (private readonly service: UpdateUserService) {}

  async handle (req: Request, res: Response): Promise<Response> {
    const data = req.body
    const { id } = req.params

    try {
      await this.service.execute(id, data)

      return res.status(201).json({ message: 'User updated success' })
    } catch (error) {
      return res.status(500).json(error)
    }
  }
}
