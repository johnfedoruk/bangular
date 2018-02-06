// #docplaster
// #docregion
import { Component }      from '@bangular/core';
import { ActivatedRoute } from '@bangular/router';

import { Phone, PhoneData } from '../core/phone/phone.service';

@Component({
  selector: 'phone-detail',
  templateUrl: './phone-detail.template.html'
})
export class PhoneDetailComponent {
  phone: PhoneData;
  mainImageUrl: string;

  constructor(activatedRoute: ActivatedRoute, phone: Phone) {
    phone.get(activatedRoute.snapshot.paramMap.get('phoneId'))
      .subscribe((p: PhoneData) => {
        this.phone = p;
        this.setImage(p.images[0]);
      });
  }

  setImage(imageUrl: string) {
    this.mainImageUrl = imageUrl;
  }
}
