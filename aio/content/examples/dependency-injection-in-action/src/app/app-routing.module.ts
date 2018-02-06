import { NgModule } from '@bangular/core';
import { Routes, RouterModule }  from '@bangular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
