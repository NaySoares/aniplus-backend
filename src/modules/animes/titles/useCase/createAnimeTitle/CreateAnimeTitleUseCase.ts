import { inject, injectable } from "tsyringe";

import { IAnimesTitleRepository } from "@modules/animes/titles/repositories/IAnimesTitleRepositories";
import { ICreateAnimeTitleDTO } from "@modules/animes/titles/dtos/ICreateAnimeTitleDTO";
import { AppError } from "@shared/errors/AppError";

@injectable()
class CreateAnimeTitleUseCase {
  constructor(
    @inject('AnimesTitleRepository')
    private animesTitleRepository: IAnimesTitleRepository,
  ){}

  async execute({ name, banner, background }: ICreateAnimeTitleDTO): Promise<void> {
    const animeTitleExists = await this.animesTitleRepository.findByName(name);

    if (animeTitleExists) {
      throw new AppError('Anime already exists!')
    }

    await this.animesTitleRepository.create({
      name,
      banner,
      background
    });
  } 
}

export { CreateAnimeTitleUseCase }