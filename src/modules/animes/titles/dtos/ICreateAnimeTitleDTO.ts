interface ICreateAnimeTitleDTO {
  id?: string,
  name: string,
  banner: string,
  background: string,
  season?: string[],
}

export { ICreateAnimeTitleDTO }