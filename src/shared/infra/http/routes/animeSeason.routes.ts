import { Router } from 'express';

import { CreateAnimeSeasonController } from '@modules/animes/seasons/useCase/CreateAnimeSeason/CreateAnimeSeasonController';

const animeSeasonRoutes = Router();

const createAnimeSeasonController = new CreateAnimeSeasonController();

animeSeasonRoutes.post('/', createAnimeSeasonController.handle);

export { animeSeasonRoutes };