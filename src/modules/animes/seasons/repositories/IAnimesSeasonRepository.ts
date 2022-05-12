import { ICreateAnimeSeasonDTO } from "../dtos/ICreateAnimeSeasonDTO"
import { AnimeSeason } from "../infra/typeorm/entities/AnimeSeason"

interface IAnimesSeasonRepository {
  create( data: ICreateAnimeSeasonDTO ): Promise<void>;
  findByName(name: string): Promise<AnimeSeason>;
  findByType(type: string): Promise<AnimeSeason[]>;
  list(): Promise<AnimeSeason[]>;
}

export { IAnimesSeasonRepository }