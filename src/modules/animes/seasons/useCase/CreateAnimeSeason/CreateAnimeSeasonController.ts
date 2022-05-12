import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateAnimeSeasonUseCase } from "./CreateAnimeSeasoUseCase";

class CreateAnimeSeasonController{
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      name,
      description,
      debut,
      position,
      type,
      cover,
      video,
    } = request.body;

    const createAnimeSeason = container.resolve(CreateAnimeSeasonUseCase)

    await createAnimeSeason.execute({
      name,
      description,
      debut,
      position,
      type,
      cover,
      video,
    });

    return response.status(201).json();
  }
}

export { CreateAnimeSeasonController }