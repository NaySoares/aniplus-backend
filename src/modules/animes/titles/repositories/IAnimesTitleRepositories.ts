import { ICreateAnimeTitleDTO } from "../dtos/ICreateAnimeTitleDTO"
import { AnimeTitle } from "../infra/typeorm/entities/AnimeTitle"

interface IAnimesTitleRepository {
  create( data: ICreateAnimeTitleDTO ): Promise<void>;
  findByName(name: string): Promise<AnimeTitle>;
}

export { IAnimesTitleRepository }