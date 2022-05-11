interface ICreateUserDTO {
  id?: string,
  username: string,
  password: string,
  avatar?: string,
  animes_recents?: string[],
  animes_complete?: string[],
  animes_dropped?: string[],
  wishlist?: string[],
}

export { ICreateUserDTO }