import { AppError } from '@shared/errors/AppError';
import { AnimesTitleRepositoryInMemory } from '@modules/animes/titles/repositories/in-memory/AnimesTitleRepositoryInMemory';
import { CreateAnimeTitleUseCase } from './CreateAnimeTitleUseCase';

let createAnimeTitleUseCase: CreateAnimeTitleUseCase;
let animesTitleRepositoryInMemory: AnimesTitleRepositoryInMemory;

describe('Create AnimeTitle', () => {
  beforeEach(() => {
    animesTitleRepositoryInMemory = new AnimesTitleRepositoryInMemory();
    createAnimeTitleUseCase = new CreateAnimeTitleUseCase(animesTitleRepositoryInMemory);
  });
  it('should be able to create a new title anime', async () => {
    const animeTitle = {
      name: 'title test',
      banner: 'banner test',
      background: 'background test',
    };
    await createAnimeTitleUseCase.execute({
      name: animeTitle.name,
      banner: animeTitle.banner,
      background: animeTitle.background,
    });

    const animeTitleCreated = await animesTitleRepositoryInMemory.findByName(animeTitle.name);

    expect(animeTitleCreated).toHaveProperty('id');
  });
});

it('should not be able to create a new title anime if the same name exists', async () => {
  expect(async () => {
    const animeTitle = {
      name: 'title test',
      banner: 'banner test',
      background: 'background test',
    };
    await createAnimeTitleUseCase.execute({
      name: animeTitle.name,
      banner: animeTitle.banner,
      background: animeTitle.background,
    });

    await createAnimeTitleUseCase.execute({
      name: animeTitle.name,
      banner: animeTitle.banner,
      background: animeTitle.background,
    });
  }).rejects.toBeInstanceOf(AppError);
});
