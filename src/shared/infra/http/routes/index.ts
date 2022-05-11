import { Request, Response, Router } from 'express';

import { usersRoutes } from './users.routes';

const router = Router();

router.use('/users', usersRoutes);

router.use('/',(request: Request, response: Response) => {
  return response.json({ok: true})
});

export { router };
