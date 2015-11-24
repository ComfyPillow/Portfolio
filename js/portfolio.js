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
    	console.log(data);
    	$scope.projects = data;
      	$scope.names = data.name;
    	$scope.urls = data.url;
    	$scope.images = data.image;
    	$scope.descs = data.description;
    }).
    error(function(data, status, headers, config) {
      console.log("Failure");
    });
});



