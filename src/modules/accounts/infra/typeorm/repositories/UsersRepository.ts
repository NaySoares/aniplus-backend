import { ICreateUserDTO } from "../../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../../repositories/IUsersRepositories";
import { getRepository, Repository } from "typeorm";
import { User } from "../entities/User";

class UsersRepository implements IUsersRepository{
  private repository: Repository<User>

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    username,
    password,
    id,
    avatar
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      username,
      password,
      id,
      avatar
    })

    await this.repository.save(user);
  }

  findById(id: string): Promise<User> {
    const user = this.repository.findOne(id)
    return user;
  }

  findByUsername(username: string): Promise<User> {
    const user = this.repository.findOne({ username })
    return user;
  }
}

export { UsersRepository }