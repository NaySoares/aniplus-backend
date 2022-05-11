import { Response, Request, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import { UsersRepository } from 'modules/accounts/infra/typeorm/repositories/UsersRepository';
import { AppError } from 'shared/errors/AppError';

interface IPayload {
  sub: string
}

export async function ensureAuthenticated (
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authHeader = request.headers.authorization;

  if(!authHeader) {
    throw new AppError('Token missing, 401')
  }

  const [, token] = authHeader.split(' ');

  try{
    const { sub: user_id } = verify(token, 'd2626f412da748e711ca4f4ae9428664') as IPayload;

    const usersRepository = new UsersRepository()

    const user = await this.usersRepository.findById(user_id);

    if(!user) {
      throw new AppError('User not found', 401)
    }

    request.user = {
      id: user.id,
    };

    next();
  } catch {
    throw new AppError('Invalid token!', 401)
  }
}

