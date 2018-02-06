// #docregion
import { Component } from '@bangular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls:  ['./banner.component.css']
})
export class BannerComponent {
  title = 'Test Tour of Heroes';
}

