// #docregion
describe('phoneDetail', () => {

  // Load the module that contains the `phoneDetail` component before each test
  beforeEach(bangular.mock.module('phoneDetail'));

  // Test the controller
  describe('PhoneDetailController', () => {
    let $httpBackend: bangular.IHttpBackendService;
    let ctrl: any;
    let xyzPhoneData = {
      name: 'phone xyz',
      images: ['image/url1.png', 'image/url2.png']
    };

    beforeEach(inject(($componentController: any,
                       _$httpBackend_: bangular.IHttpBackendService,
                       $routeParams: bangular.route.IRouteParamsService) => {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('phones/xyz.json').respond(xyzPhoneData);

      $routeParams['phoneId'] = 'xyz';

      ctrl = $componentController('phoneDetail');
    }));

    it('should fetch the phone details', () => {
      jasmine.addCustomEqualityTester(bangular.equals);

      expect(ctrl.phone).toEqual({});

      $httpBackend.flush();
      expect(ctrl.phone).toEqual(xyzPhoneData);
    });

  });

});
