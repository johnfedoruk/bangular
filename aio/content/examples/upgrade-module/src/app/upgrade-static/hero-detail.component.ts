// #docregion
// #docregion hero-detail
export const heroDetail = {
  template: `
    <h2>Windstorm details!</h2>
    <div><label>id: </label>1</div>
  `,
  controller: function() {
  }
};
// #enddocregion hero-detail

// #docregion hero-detail-upgrade
import { Directive, ElementRef, Injector, SimpleChanges } from '@bangular/core';
import { UpgradeComponent } from '@bangular/upgrade/static';

@Directive({
  selector: 'hero-detail'
})
export class HeroDetailDirective extends UpgradeComponent {
  constructor(elementRef: ElementRef, injector: Injector) {
    super('heroDetail', elementRef, injector);
  }
}
// #enddocregion hero-detail-upgrade
