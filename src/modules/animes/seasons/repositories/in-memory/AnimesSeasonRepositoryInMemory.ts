import { AnimeSeason } from '@modules/animes/seasons/infra/typeorm/entities/AnimeSeason';
import { ICreateAnimeSeasonDTO } from '../../dtos/ICreateAnimeSeasonDTO';
import { IAnimesSeasonRepository } from '../IAnimesSeasonRepository';

class AnimesSeasonRepositoryInMemory implements IAnimesSeasonRepository {
  animeSeason: AnimeSeason[] = [];

  async create({
    name,
    description,
    debut,
    position,
    type,
    cover,
  }: ICreateAnimeSeasonDTO): Promise<void> {
    const animeSeason = new AnimeSeason();

    Object.assign(animeSeason, {
      name,
      description,
      debut,
      position,
      type,
      cover,
    });

    this.animeSeason.push(animeSeason);
  }

  async findByName(name: string): Promise<AnimeSeason> {
    const animeSeason = this.animeSeason.find((animeSeason) => animeSeason.name === name);

    return animeSeason;
  }

  async findByType(type: string): Promise<AnimeSeason[]> {
    let animeSeason = []

    animeSeason = this.animeSeason.map((animeSeason) => animeSeason.type === type);

    return animeSeason;
  }

  async list(): Promise<AnimeSeason[]> {
    const list = this.animeSeason;

    return list;
  }
}

export { AnimesSeasonRepositoryInMemory }