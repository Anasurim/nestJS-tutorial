import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { number } from "yargs";
import { Movie } from "./movie";
import { MoviesService } from "./movies.service";

@Controller("movies")
export class MoviesController {
  constructor(private movieService: MoviesService) {}

  @Post()
  createMovie(@Body() movie: Movie): number {
    return this.movieService.createMovie(movie);
  }

  @Get()
  readMovies(): Movie[] {
    return this.movieService.readMovies();
  }

  @Get(":id")
  readMovie(@Param("id") id: number): Movie {
    return this.movieService.readMovie(id);
  }
}
