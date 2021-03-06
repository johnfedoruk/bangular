import { NgModule }            from '@bangular/core';
import { RouterModule }        from '@bangular/router';

import { ContactComponent }    from './contact.component.3';

const routes = [
  { path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ContactRoutingModule {}
