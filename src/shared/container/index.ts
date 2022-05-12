import { container } from 'tsyringe'

import { AnimesTitleRepository } from '@modules/animes/titles/infra/typeorm/repositories/AnimesTitleRepository'
import { IAnimesTitleRepository } from '@modules/animes/titles/repositories/IAnimesTitleRepositories'
import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepository'
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepositories'

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
)

container.registerSingleton<IAnimesTitleRepository>(
  'AnimesTitleRepository',
  AnimesTitleRepository
)