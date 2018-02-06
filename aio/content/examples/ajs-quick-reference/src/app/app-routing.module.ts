// #docregion
import { NgModule } from '@bangular/core';
import { Routes, RouterModule }  from '@bangular/router';

import { MovieListComponent } from './movie-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'movies', component: MovieListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
