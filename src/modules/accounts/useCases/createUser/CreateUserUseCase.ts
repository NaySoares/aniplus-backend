import { inject, injectable } from 'tsyringe'
import { hash } from 'bcryptjs'

import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO'
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepositories'
import { AppError } from '@shared/errors/AppError';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ){}

  async execute({
    username, password
  }: ICreateUserDTO): Promise<void> {
    const userExists = await this.usersRepository.findByUsername(username);

    if(userExists) {
      throw new AppError('Username already exists!')
    }

    const passwordHash = await hash(password, 8);
  
    await this.usersRepository.create({
      username,
      password: passwordHash,
    });
  }
}

export { CreateUserUseCase }