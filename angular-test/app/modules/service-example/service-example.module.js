'use strict';

define([
  'angular'
], function(angular) {

  angular.module('testAngular.serviceExample', ['ui.router'])
  .config(['$stateProvider', function($stateProvider) {

    $stateProvider
      .state('service-form', {
        url: '/service-form/',
        templateUrl: 'modules/service-example/form.html',
        controller: 'FormController'
      })
      .state('service-value', {
        url: 'service-value/',
        templateUrl: 'modules/service-example/value.html',
        controller: 'ValueController'
      })
  }])
  .controller('FormController', ['$scope', 'simpleService', 'commonService', function($scope, simpleService, commonService) {
    commonService.setTitle('Simple Service - Set value');

    $scope.value = simpleService.getValue();
    $scope.saved = false;

    $scope.save = function() {
      simpleService.setValue($scope.value);
      $scope.saved = true;
    }

  }])
  .controller('ValueController', ['$scope', 'simpleService', 'commonService', function($scope, simpleService, commonService) {
    commonService.setTitle('Simple Service - Preview value');

    $scope.value = simpleService.getValue();

  }]);
});