import { Router } from 'express';
import { CreateAnimeTitleController } from '@modules/animes/titles/useCase/createAnimeTitle/CreateAnimeTitleController';

const animeTitleRoutes = Router();

const createAnimeTitleController = new CreateAnimeTitleController();

animeTitleRoutes.post('/', createAnimeTitleController.handle);

export { animeTitleRoutes };