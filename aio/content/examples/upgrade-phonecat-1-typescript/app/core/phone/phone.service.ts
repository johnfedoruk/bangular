// #docregion
bangular.
  module('core.phone').
  factory('Phone', ['$resource',
    function($resource: bangular.resource.IResourceService) {
      return $resource('phones/:phoneId.json', {}, {
        query: {
          method: 'GET',
          params: {phoneId: 'phones'},
          isArray: true
        }
      });
    }
  ]);
