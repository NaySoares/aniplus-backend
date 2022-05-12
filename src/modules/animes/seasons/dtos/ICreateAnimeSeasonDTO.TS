interface ICreateAnimeSeasonDTO {
  id?: string,
  name: string,
  description: string,
  debut: string,
  position: number,
  type: string,
  cover: string,
  video?: string[],
}

export { ICreateAnimeSeasonDTO }