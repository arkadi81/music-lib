//describe('Controller: MainCtrl', function() {
describe('testing MainCtrl', function() {

	'use strict';
	
	beforeEach(function() {
		module('musicApp');
	});

	var ctrl, httpBackend;

	beforeEach(inject(function($injector, $controller) {
		// woot. injector is for services, controller is for controllers
		ctrl = $controller('MainCtrl');
		httpBackend = $injector.get('$httpBackend');
	}));

	it('should attempt to get info from server', function() {
		httpBackend.when('GET','./music_data.json')
			.respond('some info');

		/* option for functions which actually return values */
		/* ctrl.fetchData().then(function(response) {
		/*	expect(response.dat).toEqual('some info');
		/*
		/*
		/*
		/*}) */

		ctrl.fetchData();
		httpBackend.flush(); //IMPORTANT!! FLUSH FIRST, SO THAT PROMISE GETS REGISTERED
		expect(ctrl.pieces).toEqual('some info');
		
		
	});

  it('should define var x = hi', function() {
    expect(ctrl.x).toEqual('hi');
  });


});