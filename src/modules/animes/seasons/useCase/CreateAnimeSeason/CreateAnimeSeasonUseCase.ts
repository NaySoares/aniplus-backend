import { inject, injectable } from "tsyringe";
import { IAnimesSeasonRepository } from "@modules/animes/seasons/repositories/IAnimesSeasonRepository";
import { ICreateAnimeSeasonDTO } from "@modules/animes/seasons/dtos/ICreateAnimeSeasonDTO";
import { AppError } from "@shared/errors/AppError";

@injectable()
class CreateAnimeSeasonUseCase {
  constructor(
    @inject('AnimesSeasonRepository')
    private animesSeasonRepository: IAnimesSeasonRepository
  ) { }
  async execute({
    name,
    description,
    debut,
    position,
    type,
    cover,
    video,
  }: ICreateAnimeSeasonDTO): Promise<void> {
    const animeSeasonExists = await this.animesSeasonRepository.findByName(name)

    if (animeSeasonExists) {
      throw new AppError('Season already exists!')
    }

    await this.animesSeasonRepository.create({
      name,
      description,
      debut,
      position,
      type,
      cover,
      video,
    })
  }
}

export { CreateAnimeSeasonUseCase }