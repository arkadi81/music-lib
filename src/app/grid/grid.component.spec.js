describe('Grid component functions and templates testing', function() {

	'use strict'; 
	
	beforeEach(function() {
		module('musicApp');
	});

	var ctrl;

	beforeEach(inject(function($componentController) {
		ctrl = $componentController('gridComponent');
	}))

	it('should initiate composer as default searchfield', function() {
			ctrl.setDefaultField();
			expect(ctrl.search_field).toEqual('composer');
	})	
});