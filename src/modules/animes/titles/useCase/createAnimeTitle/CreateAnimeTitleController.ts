import { Request, Response } from "express"
import { container } from "tsyringe";

import { CreateAnimeTitleUseCase } from "./CreateAnimeTitleUseCase";

class CreateAnimeTitleController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, banner, background } = request.body;

    const createAnimeTitle = container.resolve(CreateAnimeTitleUseCase);
    
    await createAnimeTitle.execute({
      name,
      banner,
      background
    });


    return response.status(201).json()
  }
}

export { CreateAnimeTitleController }