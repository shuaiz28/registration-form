var app = angular.module('registration', []);
app.controller('validateCtrl', function($scope) {
		$scope.reset = function() {
    		document.getElementsByName('regForm')[0].reset();
    };
})