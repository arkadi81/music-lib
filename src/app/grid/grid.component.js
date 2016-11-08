'use strict';

angular
	.module('musicApp')
		.component('gridComponent', {
			templateUrl: 'src/app/grid/grid-component-template.html',
			controller: ['$http', function($http) {
				var self = this;

				self.setDefaultField = function() {
					self.search_field = "composer"; //default	
				}
				

				$http.get('./music_data.json') // the JSON file CANNOT contain comments for this to work properly
				.success(function(data) {
					console.log(data);
					self.pieces = data;
				})
				self.info = 'this is some dynamic info generated by a controller within a component'

				self.greet = function() {
					//self.setDefaultField();
					alert(self.search_field);
				}
			}]
		});