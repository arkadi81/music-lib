/** app.js , definition of modules pertaining
 to main view in index.html **/
"use strict";

angular.module('musicApp', [])
	.controller('MainCtrl',[ '$http',function ($http) { // the array includes a list of dependencies in string format, last argument is function which defines what controller does. controller definition is piped down from module.
		//console.log('MainCtrl has been created');
		//anything the user needs to see or the HTML needs to use, must be defined on 'this'

		var self = this; // due to JS scope funny stuff, its good practice to define self = this in every controller and use self. this could be screwy.
		
		self.fetchData = function() {

			$http.get('./music_data.json') // the JSON file CANNOT contain comments for this to work properly
				.success(function(data) {
					console.log(data);
					self.pieces = data;
				})


			// the return value is necessary to test async
			//return $http.get('./music_data.json');
			
		}

		self.x = "hi";

		self.bye = function() {
			self.x = "bye";
		}



	}]);


/** <script type="text/javascript">
/**	$(window).on("load resize ", function() {
  var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
  $('.tbl-header').css({'padding-right':scrollWidth});
}).resize(); 
</script> **/