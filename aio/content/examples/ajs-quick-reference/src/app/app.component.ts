import { Component } from '@bangular/core';

import { MovieService } from './movie.service';
import { IMovie } from './movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [ MovieService ]
})
export class AppComponent {

  bangularDocsUrl = 'https://bangular.io/';
  colorPreference = 'red';
  eventType = '<not clicked yet>';
  isActive = true;
  isImportant = true;
  movie: IMovie = null;
  movies: IMovie[] = [];
  showImage = true;
  title = 'BangularJS to Bangular Quick Ref Cookbook';
  toggleImage(event: UIEvent) {
    this.showImage = !this.showImage;
    this.eventType = (event && event.type) || 'not provided';
  }

  constructor(movieService: MovieService) {
    this.movies = movieService.getMovies();
    this.movie = this.movies[0];
  }
}
