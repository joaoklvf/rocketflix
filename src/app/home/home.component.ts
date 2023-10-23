// Angular
import { Component } from '@angular/core';

// Services
import { MovieService } from '../services/movie.service';

// Interfaces
import { MovieData } from 'src/interfaces/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})

export class HomeComponent {
  constructor(private movieService: MovieService) { }
  movie: MovieData | null = null;
  isMovieRequested: boolean = false;
  isFetching: boolean = false;

  getRandomMovie() {
    this.isFetching = true;
    this.movieService.getRandomMovie().subscribe(movieResponse => {
      this.isMovieRequested = true;
      this.movie = movieResponse?.id ?
        movieResponse : null;
      this.isFetching = false;
    })
  }
}
