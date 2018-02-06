// #docplaster
// #docregion
import { NgModule }       from '@bangular/core';
import { FormsModule }    from '@bangular/forms';
import { CommonModule }   from '@bangular/common';

import { CrisisService }        from './crisis.service';

import { CrisisCenterComponent }      from './crisis-center.component';
import { CrisisListComponent }        from './crisis-list.component';
import { CrisisCenterHomeComponent }  from './crisis-center-home.component';
import { CrisisDetailComponent }      from './crisis-detail.component';

import { CrisisCenterRoutingModule }  from './crisis-center-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CrisisCenterRoutingModule
  ],
  declarations: [
    CrisisCenterComponent,
    CrisisListComponent,
    CrisisCenterHomeComponent,
    CrisisDetailComponent
  ],

  // #docregion providers
  providers: [
    CrisisService
  ]
  // #enddocregion providers
})
export class CrisisCenterModule {}
// #enddocregion
