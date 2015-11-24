// Create app
var app = angular.module('app', ['ui.router'])

// Configure app
app.config(function($stateProvider) {
  $stateProvider
  		.state('home', { // Landing page
				url:'/home',
			    templateUrl: 'Portfolio/templates/home.html', // HTML fragment
		   	    controller: 'HomeController', // Which controller 
		})

		.state('projects', { 
				url:'/projects',
			    templateUrl: 'Portfolio/templates/projects.html', // HTML fragment
		   	    controller: 'ProjectsController', // Which controller 
		})

		.state('interests', { 
				url:'/interests',
			    templateUrl: 'Portfolio/templates/interests.html', // HTML fragment
		   	    controller: 'InterestsController', // Which controller 
		})

		.state('contact', { 
				url:'/contact',
			    templateUrl: 'Portfolio/templates/contact.html', // HTML fragment
		   	    controller: 'ContactController', // Which controller 
		})
})

.controller('HomeController', function($scope){
})

.controller('ProjectsController', function($scope){
})

.controller('InterestsController', function($scope){
})

.controller('ContactController', function($scope){
})

//Gets project JSON data for display on Projects page
.controller("GetProjects", function($scope, $http) {
  $http.get('js/projects.json').
    success(function(data, status, headers, config) {
    	$scope.projects = data.projects;
    }).
    error(function(data, status, headers, config) {
      console.log("Failure");
    });
})

//For link highlighting and fade
.controller("linkHighlight", function($scope){
	$scope.highlight = function(link) {
		var a = $(".tab");
		    for(var i=0;i<a.length;i++){
		        if((link + "Link") == a[i].id){
		            $(a[i]).css("color","#222222");
		        } else {
		        	$(a[i]).css("color", "#9c9c9c");
		        	$(a[i]).css("-moz-transition", "color .6s ease-in");
		        	$(a[i]).css("-o-transition", "color .6s ease-in");
		        	$(a[i]).css("-webkit-transition", "color .6s ease-in");
		        }
		    }
	}
});

//To default index to home.
app.run(['$state', function ($state) {
	$state.transitionTo('home');
}]);





