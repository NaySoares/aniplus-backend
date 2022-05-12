import { AnimeTitle } from '@modules/animes/titles/infra/typeorm/entities/AnimeTitle';
import { ICreateAnimeTitleDTO } from '../../dtos/ICreateAnimeTitleDTO';
import { IAnimesTitleRepository } from '../IAnimesTitleRepositories';

class AnimesTitleRepositoryInMemory implements IAnimesTitleRepository {
  animeTitle: AnimeTitle[] = [];

  async create({ name, banner, background }: ICreateAnimeTitleDTO): Promise<void> {
    const animeTitle = new AnimeTitle();

    Object.assign(animeTitle, { name, banner, background });

    this.animeTitle.push(animeTitle);
  }
  
  async findByName(name: string): Promise<AnimeTitle> {
    const animeTitle = this.animeTitle.find((animeTitle) => animeTitle.name === name);
    return animeTitle;
  }
}

export { AnimesTitleRepositoryInMemory }