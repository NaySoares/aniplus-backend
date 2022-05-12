import { AppError } from '@shared/errors/AppError';
import { AnimesSeasonRepositoryInMemory } from '@modules/animes/seasons/repositories/in-memory/AnimesSeasonRepositoryInMemory';
import { CreateAnimeSeasonUseCase } from './CreateAnimeSeasonUseCase';

let createAnimeSeasonUseCase: CreateAnimeSeasonUseCase;
let animesSeasonRepositoryInMemory: AnimesSeasonRepositoryInMemory;

describe('Create AnimeSeason', () => {
  beforeEach(() => {
    animesSeasonRepositoryInMemory = new AnimesSeasonRepositoryInMemory();
    createAnimeSeasonUseCase = new CreateAnimeSeasonUseCase(animesSeasonRepositoryInMemory);
  });
  it('should be able to create a new season anime', async () => {
    const animeSeason = {
      name: 'title test',
      description: 'description test',
      debut: 'debut test',
      position: 1,
      type: 'type test',
      cover: 'cover test',
    };
    await createAnimeSeasonUseCase.execute({
      name: animeSeason.name,
      description: animeSeason.description,
      debut: animeSeason.debut,
      position: animeSeason.position,
      type: animeSeason.type,
      cover: animeSeason.cover,
    });

    const animeSeasonCreated = await animesSeasonRepositoryInMemory.findByName(animeSeason.name);

    expect(animeSeasonCreated).toHaveProperty('id');
  });
});

it('should not be able to create a new season anime if the same name exists', async () => {
  expect(async () => {
    const animeSeason = {
      name: 'title test',
      description: 'description test',
      debut: 'debut test',
      position: 1,
      type: 'type test',
      cover: 'cover test',
    };
    await createAnimeSeasonUseCase.execute({
      name: animeSeason.name,
      description: animeSeason.description,
      debut: animeSeason.debut,
      position: animeSeason.position,
      type: animeSeason.type,
      cover: animeSeason.cover,
    });
    
    await createAnimeSeasonUseCase.execute({
      name: animeSeason.name,
      description: animeSeason.description,
      debut: animeSeason.debut,
      position: animeSeason.position,
      type: animeSeason.type,
      cover: animeSeason.cover,
    });
  }).rejects.toBeInstanceOf(AppError);
});
