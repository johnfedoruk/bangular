import { NgModule }             from '@bangular/core';
import { Routes, RouterModule } from '@bangular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'contact', pathMatch: 'full'},
  { path: 'items', loadChildren: 'app/items/items.module#ItemsModule' },
  { path: 'customers', loadChildren: 'app/customers/customers.module#CustomersModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
