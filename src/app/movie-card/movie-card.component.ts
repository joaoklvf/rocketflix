import { Component, Input } from '@angular/core';
import { IMG_URL } from 'api';
import { MovieData } from 'src/interfaces/movie';

const DEFAULT_IMAGE_PATH = '../../assets/default.png';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.sass']
})

export class MovieCardComponent {
  @Input() movie: MovieData | null = null;
  @Input() showDefaultValue: boolean = false;

  getImagePath() {
    return this.movie ?
      `${IMG_URL}${this.movie.poster_path}` : DEFAULT_IMAGE_PATH;
  }

  getImageAlt() {
    return this.movie ?
      this.movie.title : 'Code time';
  }
}
