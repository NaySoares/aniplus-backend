import { ICreateAnimeSeasonDTO } from "@modules/animes/seasons/dtos/ICreateAnimeSeasonDTO";
import { IAnimesSeasonRepository } from "@modules/animes/seasons/repositories/IAnimesSeasonRepository";
import { getRepository, Repository } from "typeorm";
import { AnimeSeason } from "../entities/AnimeSeason";

class AnimesSeasonRepository implements IAnimesSeasonRepository {
  private repository: Repository<AnimeSeason>;

  constructor() {
    this.repository = getRepository(AnimeSeason);
  }

  async create({
    id,
    name,
    description,
    debut,
    position,
    type,
    cover,
    video,
  }: ICreateAnimeSeasonDTO): Promise<void> {
    const animeSeason = this.repository.create({
      id,
      name,
      description,
      debut,
      position,
      type,
      cover,
      video
    });

    await this.repository.save(animeSeason);
  }


  async findByName(name: string): Promise<AnimeSeason> {
    const animeSeason = await this.repository.findOne({ name })

    return animeSeason;
  }

  async findByType(type: string): Promise<AnimeSeason[]> {
    let animeSeason = []
    animeSeason = await this.repository.find({ type })

    return animeSeason;
  }
  
  async list(): Promise<AnimeSeason[]> {
    let animeSeason = []
    animeSeason = await this.repository.find()

    return animeSeason;
  }
}

export { AnimesSeasonRepository }