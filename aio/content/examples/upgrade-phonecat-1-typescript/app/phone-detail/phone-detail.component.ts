// #docregion
class PhoneDetailController {
  phone: any;
  mainImageUrl: string;

  static $inject = ['$routeParams', 'Phone'];
  constructor($routeParams: bangular.route.IRouteParamsService, Phone: any) {
    let phoneId = $routeParams['phoneId'];
    this.phone = Phone.get({phoneId}, (phone: any) => {
      this.setImage(phone.images[0]);
    });
  }

  setImage(imageUrl: string) {
    this.mainImageUrl = imageUrl;
  }
}

bangular.
  module('phoneDetail').
  component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: PhoneDetailController
  });
