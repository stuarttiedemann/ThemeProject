angular.module('myApp',[]).controller('myController',function($scope){
	$scope.Project = function (title,image,link){
		this.title = title;
		this.image = image
		this.link = link
	}
	$scope.projects=[];
	$scope.projects.push(new $scope.Project("Google Maps API","img/work/googlemaps.png","http://googlemapsapi.bitballoon.com/"));
	$scope.projects.push(new $scope.Project("Plane Routes Angular & Google Maps API","img/work/planeroutes.png","http://stuarttiedemann.com/planeroutes/#/"));
	$scope.projects.push(new $scope.Project("Open Movie Database API","img/work/openmoviedatabase.png","http://openmoviedatabase.bitballoon.com"));
	$scope.projects.push(new $scope.Project("House Listings in Angular","img/work/houselistingangular.png","http://houselistingsinangular.bitballoon.com"));
	$scope.projects.push(new $scope.Project("Yahoo Stocks API","img/work/stocks.png","http://stuarttiedemann.com/angular-stocks"));
	$scope.projects.push(new $scope.Project("Weather App API","img/work/WeatherApp.png","http://stuarttiedemann.com/weather/"));
	
	
});