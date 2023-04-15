import { Body, Controller, Post } from "@nestjs/common";
import { Movie } from "./movie";
import { MoviesService } from "./movies.service";

@Controller("movies")
export class MoviesController {
  constructor(private movieService: MoviesService) {}

  @Post()
  createMovie(@Body() movie: Movie): number {
    return this.movieService.createMovie(movie);
  }
}
