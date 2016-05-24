var app = angular.module('materialPage', ['ngMaterial', 'ngRoute']);

  app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
  .when("/", {templateUrl: "includes/inicio.html", controller: "PageCtrl"})
  .otherwise("/404", {templateUrl: "includes/404.html", controller: "PageCtrl"});
  }]);

  app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('purple')
    .accentPalette('light-blue')
});

  app.controller('PageCtrl', function ($scope, $location, $http) {

   });
