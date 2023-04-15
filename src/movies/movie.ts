export interface Movie {
  id: number;
  name: string;
  director: string;
  length: number;
  genre: Genre;
}

export enum Genre {
  Action = 0,
  Comedy = 1,
  Drama = 2,
  Horror = 3,
  Thriller = 4,
}
