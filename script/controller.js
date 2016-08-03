angular.module('myApp',[]).controller('myController',function($scope){
	$scope.Project = function (title,image,link, tooltip){
		this.title = title;
		this.image = image
		this.link = link,
		this.tooltip = tooltip
	}

	$scope.projects=[];
	$scope.projects.push(new $scope.Project("A NODE.JS COFFEE ECOMMERCE SITE","img/work/coffee.png","http://stuartscoffee.herokuapp.com/#","An ecommerce site using Nodejs and Mongo db."))
	$scope.projects.push(new $scope.Project("USE GOOGLE MAPS API INTEGRATION","img/work/maps.png","http://googlemapsapi.bitballoon.com/","Use Google Maps API to find directions, lodging, and grocery stores for a selected location."));
	// $scope.projects.push(new $scope.Project("PLANE ROUTES ANGULAR & GOOGLE MAPS API","img/work/plane.png","http://stuarttiedemann.com/planeroutes/#/","A project that uses AngularJS and Google Maps API to visually show the flight range of various planes from a selected departure point."));
	$scope.projects.push(new $scope.Project("USE THE OPEN MOVIE DATABASE API","img/work/movie.png","http://openmoviedatabase.bitballoon.com", "A project showing the most popular movies using the openmoviedatabase API.  User can also search for movies and actors"));
	$scope.projects.push(new $scope.Project("YAHOO STOCKS USING YAHOO FINANCE API","img/work/stocks.png","http://stuarttiedemann.com/angular-stocks","Use Yahoo's API to pull and display stock data. "));
	$scope.projects.push(new $scope.Project("WEATHER APP USING OPEN WEATHER API","img/work/weather.png","http://stuarttiedemann.com/weather/","Use OpenWeatherMap API to retrieve current conditions and five day forecast for any location."));
	
	
});