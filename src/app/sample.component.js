'use strict';

angular.
  module('musicApp').
  component('sampleComponent', {
    template:
      '<div class="panel panel-primary well">' +
        'HI! '+
        'This is a demonstration of a sample component:' +
        'Some calculated data here (time elapsed in seconds since 1970)' +
        '<div ng-bind="$ctrl.response"></div>'+
        '</div>',
        //$ctrl is the standard filler for the self thing
        // see
        // https://docs.angularjs.org/api/ng/provider/$compileProvider#component
    controller: function() {
      var self = this;
      self.response = Date.now();
      self.greeting = 'hi'; // for testing
    }
  });