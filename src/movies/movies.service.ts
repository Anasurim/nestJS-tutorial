import { Injectable } from "@nestjs/common";
import { Movie } from "./movie";

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  createMovie(movie: Movie): number {
    this.movies.push(movie);
    return movie.id;
  }
}
