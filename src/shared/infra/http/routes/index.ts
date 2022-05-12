import { Request, Response, Router } from 'express';

import { usersRoutes } from './users.routes';
import { animeTitleRoutes } from './animeTitle.routes';
import { animeSeasonRoutes } from './animeSeason.routes';

const router = Router();

router.use('/users', usersRoutes);
router.use('/animetitle', animeTitleRoutes);
router.use('/animeseason', animeSeasonRoutes);

router.use('/',(request: Request, response: Response) => {
  return response.json({ok: true})
});

export { router };
