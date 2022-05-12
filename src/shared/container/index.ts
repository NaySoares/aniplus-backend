import { container } from 'tsyringe'

import { AnimesTitleRepository } from '@modules/animes/titles/infra/typeorm/repositories/AnimesTitleRepository'
import { IAnimesTitleRepository } from '@modules/animes/titles/repositories/IAnimesTitleRepositories'
import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepository'
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepositories'
import { IAnimesSeasonRepository } from '@modules/animes/seasons/repositories/IAnimesSeasonRepository'
import { AnimesSeasonRepository } from '@modules/animes/seasons/infra/typeorm/repositories/AnimesSeasonRepository'

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
)

container.registerSingleton<IAnimesTitleRepository>(
  'AnimesTitleRepository',
  AnimesTitleRepository
)

container.registerSingleton<IAnimesSeasonRepository>(
  'AnimesSeasonRepository',
  AnimesSeasonRepository
)