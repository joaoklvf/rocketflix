import { Component } from '@angular/core';
import { MovieService } from '../services/movie.service';
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

  getRandomMovie() {
    this.movieService.getRandomMovie().subscribe(movieResponse => {
      this.isMovieRequested = true;
      this.movie = movieResponse?.id ? movieResponse : null;
    })
  }
}
