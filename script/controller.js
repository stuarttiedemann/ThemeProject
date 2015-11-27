angular.module('myApp',[]).controller('myController',function($scope){
	$scope.Project = function (title,image){
		this.title = title;
		this.image = image;
	}
	$scope.projects=[];
	$scope.projects.push(new $scope.Project("Google Maps API","img/work/googlemaps.png"));
	$scope.projects.push(new $scope.Project("House Listings in Angular","img/work/houselistingangular.png"));
	$scope.projects.push(new $scope.Project("Open Movie Database API","img/work/openmoviedatabase.png"));
	$scope.projects.push(new $scope.Project("Yahoo Stocks API","img/work/stocks.png"));
	$scope.projects.push(new $scope.Project("Weather App API","img/work/WeatherApp.png"));
	$scope.projects.push(new $scope.Project("Youtube Mockup in Jquery & Angular API","img/work/youtube.png"));
	console.log("The value of projects is: "+$scope.projects);
});