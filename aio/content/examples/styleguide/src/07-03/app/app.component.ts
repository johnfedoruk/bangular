// #docregion
import { Component } from '@bangular/core';

import { HeroService } from './heroes';

@Component({
  selector: 'toh-app',
  template: `
      <toh-heroes></toh-heroes>
    `,
  providers: [HeroService]
})
export class AppComponent {}
