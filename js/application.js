var app = angular.module('materialPage', ['ngMaterial', 'ngRoute']);

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

  app.controller('PageCtrl', function ($scope, $location, $http) {

   });
