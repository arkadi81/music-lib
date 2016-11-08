// template for testing components

describe('sampleComponent', function() {

  // Load the module that contains the `phoneList` component before each test
  beforeEach(module('musicApp'));

  // Test the controller
  describe('sampleController', function() {

    it('should set internal greeting var to hi on init', inject(function($componentController) {
      var ctrl = $componentController('sampleComponent');
      //at this point, template and controller are already linked
      // and executed. since the controller and view are linked,
      // the controller function shouldnt really return a value and we 
      // shouldnt expect one, just roll with tre scope variable testing

      expect(ctrl.greeting).toEqual('hi');
    }));

  });

});