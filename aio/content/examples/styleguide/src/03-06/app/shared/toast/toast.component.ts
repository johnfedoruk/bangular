import { Component, OnInit } from '@bangular/core';

import { ToastService } from '../../core';

@Component({
  selector: 'toh-toast',
  template: '<div>toast</div>'
})
export class ToastComponent implements OnInit {
  constructor(toastService: ToastService) { }

  ngOnInit() { }
}
