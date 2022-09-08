import { FindUserByEmailRepository } from '../../repositories/users/FindUserByEmailRepository'
import { sign } from 'jsonwebtoken'
import { compare } from 'bcryptjs'

interface Request {
  email: string
  password: string
}

export class AuthService {
  constructor (private readonly repository: FindUserByEmailRepository) {}

  async execute ({ email, password }: Request) {
    const user = await this.repository.findByEmail(email)

    if (user == null) throw new Error('Credenciais inválidas')

    const passwordCompare = await compare(password, user.password as string)

    if (!passwordCompare) throw new Error('Credenciais inválidas')

    if (!user.active) throw new Error('Usuário inativo')

    const token = sign({}, process.env.APP_SECRET as string, {
      expiresIn: '1d'
    })

    // delete user.password;

    return { token, user }
  }
}
