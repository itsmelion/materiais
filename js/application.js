var app = angular.module('materialPage', ['ngMaterial', 'ngRoute', 'firebase']);

app.config(['$routeProvider', function ($routeProvider) {
$routeProvider
.when("/", {templateUrl: "includes/inicio.html", controller: "PageCtrl"})
.when("/404", {templateUrl: "includes/404.html", controller: "PageCtrl"})
.otherwise({redirectTo:"/404"});
}]);

app.config(function($mdThemingProvider) {
var ctaTeal = $mdThemingProvider.extendPalette('teal', {
'A200': '26a69a',
'A100': '4db6ac',
'contrastLightColors': ['300', '400', 'A100', 'A200']
});
$mdThemingProvider.definePalette('plugTeal', ctaTeal);
$mdThemingProvider.theme('default')
  .primaryPalette('blue-grey')
  .accentPalette('plugTeal')
});

app.controller("ebookCtrl", function($scope, $firebaseArray) {
  var config = {
    apiKey: "AIzaSyCS8ct1H6uDmhOOhCjahsHqJzuxPG8G-eU",
    authDomain: "library-a1301.firebaseapp.com",
    databaseURL: "https://library-a1301.firebaseio.com",
    storageBucket: "library-a1301.appspot.com",
  };
   var ref = new Firebase("https://library-a1301.firebaseio.com/");
   // create a synchronized array
   $scope.ebooks = $firebaseArray(ref);
});

app.controller('sidebarCtrl', function ($scope, $mdSidenav) {
    $scope.toggleRight = buildToggler('right');
    $scope.isOpenRight = function(){
      return $mdSidenav('right').isOpen();
    };
    function buildToggler(navID) {
      return function() {
        // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav(navID)
          .toggle()
      }
    }
    $scope.close = function () {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav('right').close()
    };
});

  app.controller('PageCtrl', function ($scope, $location, $http) {
  });
