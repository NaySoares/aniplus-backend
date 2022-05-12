import { Request, Response, Router } from 'express';

import { usersRoutes } from './users.routes';
import { animeTitleRoutes } from './animeTitle.routes';

const router = Router();

router.use('/users', usersRoutes);
router.use('/animetitle', animeTitleRoutes);

router.use('/',(request: Request, response: Response) => {
  return response.json({ok: true})
});

export { router };
