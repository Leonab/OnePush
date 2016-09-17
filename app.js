angular.module('MyApp', ['ngMaterial', 'angular-loading-bar', 'ngAnimate'])

.config(function($mdThemingProvider) {

    $mdThemingProvider.theme('default')
        .primaryPalette('pink')
        .accentPalette('orange');


})



.controller('TopGit', ['$scope', '$http', '$mdSidenav', function($scope, $http, $mdSidenav) {
    $scope.$watch('search', function() {
        fetch();
    });

    $scope.toggleSidenav = function(menuId) {
      
        $mdSidenav(menuId).toggle();
    };

    //$scope.search = "php";

    function fetch() {

        $http.get("https://hackerearth.0x10.info/api/one-push?type=json&query=list_websites")
            .then(function(response) {

                $scope.details = response.data;
				console.log($scope.details);

            });


    }
	
	$scope.push = function() {
		
		
		$http({
        url: 'https://hackerearth.0x10.info/api/one-push?type=json&query=push',
        method: "POST",
        data: { 'title' : $scope.title, 'url': $scope.url, 'tag': $scope.tag }
        })
        .then(function(response) {
            // success
			console.log(response);
        }, 
        function(response) {
            // failed
			console.log(response);
        });
	    }

    $scope.select = function() {

        this.setSelectionRange(0, this.value.length);
    }


}]);
