// Angular
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

// API
import { IMG_URL } from 'api';

// Interfaces
import { MovieData } from 'src/interfaces/movie';

// Constants
const DEFAULT_IMAGE_PATH = '../../assets/default.png';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.sass']
})

export class MovieCardComponent implements OnChanges {
  @Input() movie: MovieData | null = null;
  @Input() showDefaultValue: boolean = false;
  imagePath: string = DEFAULT_IMAGE_PATH;
  imageAlt: string = 'Code time';

  ngOnChanges(changes: SimpleChanges) {
    const movie = changes['movie']?.currentValue;

    if (movie) {
      this.imagePath = `${IMG_URL}${movie.poster_path}`;
      this.imageAlt = movie.title;
    }
    else {
      this.imagePath = DEFAULT_IMAGE_PATH;
      this.imageAlt = 'Code time';
    }
  }
}
