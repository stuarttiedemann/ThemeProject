angular.module('myApp',[]).controller('myController',function($scope){
	$scope.Project = function (title,image,link, tooltip){
		this.title = title;
		this.image = image
		this.link = link,
		this.tooltip = tooltip
	}
	$scope.projects=[];
	$scope.projects.push(new $scope.Project("Nodejs Coffee Ecommerce Site","img/work/coffeesite.png","http://stuartscoffee.herokuapp.com/#","An ecommerce site using Nodejs and Mongo db."))
	$scope.projects.push(new $scope.Project("Google Maps API","img/work/googlemaps.png","http://googlemapsapi.bitballoon.com/","Use Google Maps API to find directions, lodging, and grocery stores for a selected location."));
	$scope.projects.push(new $scope.Project("Plane Routes Angular & Google Maps API","img/work/planeroutes.png","http://stuarttiedemann.com/planeroutes/#/","A project that uses AngularJS and Google Maps API to visually show the flight range of various planes from a selected departure point."));
	$scope.projects.push(new $scope.Project("Open Movie Database API","img/work/openmoviedatabase.png","http://openmoviedatabase.bitballoon.com", "A project showing the most popular movies using the openmoviedatabase API.  User can also search for movies and actors"));
	$scope.projects.push(new $scope.Project("House Listings in Angular","img/work/houselistingangular.png","http://stuarttiedemann.com/houses/", "Angular project that allows the user to edit and update house listings."));
	$scope.projects.push(new $scope.Project("Yahoo Stocks API","img/work/stocks.png","http://stuarttiedemann.com/angular-stocks","Use Yahoo's API to pull and display stock data. "));
	$scope.projects.push(new $scope.Project("Weather App API","img/work/WeatherApp.png","http://stuarttiedemann.com/weather/","Use OpenWeatherMap API to retrieve current conditions and five day forecast for any location."));
	
	
});