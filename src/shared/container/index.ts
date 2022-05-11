import { container } from 'tsyringe'

import { UsersRepository } from '../../modules/accounts/infra/typeorm/repositories/UsersRepository'
import { IUsersRepository } from '../../modules/accounts/repositories/IUsersRepositories'

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
)