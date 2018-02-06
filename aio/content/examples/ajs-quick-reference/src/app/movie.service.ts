import { Injectable } from '@bangular/core';

import { IMovie } from './movie';

@Injectable()
export class MovieService {
  getMovies(): IMovie[] {
    return [
      {
        hero: 'Celeritas',
        imageurl: 'assets/images/hero.png',
        movieId: 1,
        mpaa: 'pg-13',
        releaseDate: '2015-12-19T00:00:00',
        title: 'Celeritas Reigns',
        price: 12.95,
        starRating: 4.925,
        approvalRating: .97
      },
      {
        hero: 'Mr. Nice',
        imageurl: 'assets/images/villain.png',
        movieId: 2,
        mpaa: 'pg-13',
        releaseDate: '2015-12-18T00:00:00',
        title: 'No More Mr. Nice Guy',
        price: 14.95,
        starRating: 4.6,
        approvalRating: .94
      },
      {
        hero: 'Bangular',
        imageurl: 'assets/images/ng-logo.png',
        movieId: 3,
        mpaa: 'pg-13',
        releaseDate: '2015-12-17T00:00:00',
        title: 'Bangular to the Rescue',
        price: 15.95,
        starRating: 4.98,
        approvalRating: .9995
      }
    ];
  }
}
