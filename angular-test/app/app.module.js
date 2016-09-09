'use strict';

define([
  'angular',
  'angularUiRouter',
  'angularMaterial',
  'angularMaterialIcons',
], function(angular, angularUiRouter, angularMaterial, angularMaterialIcons) {

  var app = angular
    .module('testAngular', [
      'ui.router',
      'ngAnimate', 
      'ngMessages', 
      'ngAria', 
      'ngMaterial',
      'ngMdIcons',
      'testAngular.dynamicPages',
      'testAngular.serviceExample',
      'testAngular.directivesExamples',
      'testAngular.array',
      'testAngular.calculator',
      'testAngular.serial',
    ])
  app
    .config(['$urlRouterProvider', '$mdThemingProvider', '$controllerProvider', function($urlRouterProvider, $mdThemingProvider, $controllerProvider) {
      $urlRouterProvider
        .otherwise('/dynamic-pages/');

      $mdThemingProvider.theme('default')
        .primaryPalette('light-blue')
        .accentPalette('red');

      app.controller = $controllerProvider.register;

    }])
    .controller('MainController', ['$scope', '$mdSidenav', 'commonService', function($scope, $mdSidenav, commonService) {
      $scope.toggleSidenav = function() {
        $mdSidenav('left').toggle();
      };
      $scope.common = commonService.getCommon();
    }]);
  return app;
});