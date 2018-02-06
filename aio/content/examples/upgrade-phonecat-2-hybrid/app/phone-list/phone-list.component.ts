// #docregion downgrade-component
declare var bangular: bangular.IBangularStatic;
import { downgradeComponent } from '@bangular/upgrade/static';

// #enddocregion downgrade-component

// #docregion initialclass
import { Component } from '@bangular/core';
import { Phone, PhoneData } from '../core/phone/phone.service';

// #docregion downgrade-component
@Component({
  selector: 'phone-list',
  templateUrl: './phone-list.template.html'
})
export class PhoneListComponent {
  // #enddocregion downgrade-component
  phones: PhoneData[];
  query: string;
  orderProp: string;

  constructor(phone: Phone) {
    phone.query().subscribe(phones => {
      this.phones = phones;
    });
    this.orderProp = 'age';
  }
  // #enddocregion initialclass

  // #docregion getphones
  getPhones(): PhoneData[] {
    return this.sortPhones(this.filterPhones(this.phones));
  }

  private filterPhones(phones: PhoneData[]) {
    if (phones && this.query) {
      return phones.filter(phone => {
        let name = phone.name.toLowerCase();
        let snippet = phone.snippet.toLowerCase();
        return name.indexOf(this.query) >= 0 || snippet.indexOf(this.query) >= 0;
      });
    }
    return phones;
  }

  private sortPhones(phones: PhoneData[]) {
    if (phones && this.orderProp) {
      return phones
        .slice(0) // Make a copy
        .sort((a, b) => {
          if (a[this.orderProp] < b[this.orderProp]) {
            return -1;
          } else if ([b[this.orderProp] < a[this.orderProp]]) {
            return 1;
          } else {
            return 0;
          }
        });
    }
    return phones;
  }
  // #enddocregion getphones
  // #docregion initialclass, downgrade-component
}
// #enddocregion initialclass

bangular.module('phoneList')
  .directive(
    'phoneList',
    downgradeComponent({component: PhoneListComponent}) as bangular.IDirectiveFactory
  );
// #enddocregion downgrade-component
