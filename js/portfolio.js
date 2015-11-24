// Create app
var app = angular.module('app', ['ui.router'])

// Configure app
app.config(function($stateProvider) {
  $stateProvider
  		.state('home', { // Landing page
				url:'/home',
			    templateUrl: '../templates/home.html', // HTML fragment
		   	    controller: 'HomeController', // Which controller 
		})

		.state('projects', { // Landing page
				url:'/projects',
			    templateUrl: '../templates/projects.html', // HTML fragment
		   	    controller: 'ProjectsController', // Which controller 
		})

		.state('interests', { // Landing page
				url:'/interests',
			    templateUrl: '../templates/interests.html', // HTML fragment
		   	    controller: 'InterestsController', // Which controller 
		})

		.state('contact', { // Landing page
				url:'/contact',
			    templateUrl: '../templates/contact.html', // HTML fragment
		   	    controller: 'ContactController', // Which controller 
		})
})

.controller('HomeController', function($scope){
   $scope.image = "../img/"
})

.controller('ProjectsController', function($scope){
   $scope.about = "Here's some information about my projects."
})

.controller('InterestsController', function($scope){
})

.controller('ContactController', function($scope){
   $scope.url = "https://www.linkedin.com/profile/view?id=AAIAAAlnLK4BKmQ8TxTYs2dJ2WbRbEGNV6s4sfc&trk=nav_responsive_tab_profile_pic"
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






