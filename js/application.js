var app = angular.module('materialPage', ['ngMaterial', 'ngRoute', 'firebase']);

app.config(['$routeProvider', function ($routeProvider) {
$routeProvider
.when("/", {templateUrl: "includes/inicio.html", controller: "PageCtrl"})
.otherwise("/404", {templateUrl: "includes/404.html", controller: "PageCtrl"});
}]);

app.config(function($mdThemingProvider) {
var ctaTeal = $mdThemingProvider.extendPalette('teal', {
'A200': '26a69a',
'A100': '4db6ac',
'contrastLightColors': ['300', '400', 'A100', 'A200']
});
$mdThemingProvider.definePalette('plugTeal', ctaTeal);
$mdThemingProvider.theme('default')
  .primaryPalette('purple')
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

app.controller('sidebarCtrl', function ($scope, $timeout, $mdSidenav, $location, $http) {
    $scope.toggleRight = buildToggler('right');
    $scope.isOpenRight = function(){
      return $mdSidenav('right').isOpen();
    };
    /**
     * Supplies a function that will continue to operate until the
     * time is up.
     */
    function debounce(func, wait, context) {
      var timer;
      return function debounced() {
        var context = $scope,
            args = Array.prototype.slice.call(arguments);
        $timeout.cancel(timer);
        timer = $timeout(function() {
          timer = undefined;
          func.apply(context, args);
        }, wait || 10);
      };
    }
    function buildToggler(navID) {
      return function() {
        // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug("toggle " + navID + " is done");
          });
      }
    }
  });
  app.controller('RightCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav('right').close()
        .then(function () {
          $log.debug("close RIGHT is done");
        });
    };
  });

  app.controller('PageCtrl', function ($scope, $location, $http) {
  });
