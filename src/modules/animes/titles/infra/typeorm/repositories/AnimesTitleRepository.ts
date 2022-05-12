import { ICreateAnimeTitleDTO } from "@modules/animes/titles/dtos/ICreateAnimeTitleDTO";
import { getRepository, Repository } from "typeorm";
import { IAnimesTitleRepository } from "@modules/animes/titles/repositories/IAnimesTitleRepositories";
import { AnimeTitle } from "../entities/AnimeTitle";

class AnimesTitleRepository implements IAnimesTitleRepository {
  private repository: Repository<AnimeTitle>;

  constructor() {
    this.repository = getRepository(AnimeTitle);
  }


  async create({
    id,
    name,
    banner,
    background,
    }: ICreateAnimeTitleDTO): Promise<void> {
    const animeTitle = this.repository.create({
      id,
      name,
      banner,
      background,
    });

    await this.repository.save(animeTitle);
  }
  async findByName(name: string): Promise<AnimeTitle> {
    const animeTitle = await this.repository.findOne({ name })

    return animeTitle;
  }

}

export { AnimesTitleRepository }