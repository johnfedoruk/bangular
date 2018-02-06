import { NgModule }            from '@bangular/core';
import { RouterModule }        from '@bangular/router';

import { ContactComponent }    from './contact.component';

const routes = [
  { path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ContactRoutingModule {}

