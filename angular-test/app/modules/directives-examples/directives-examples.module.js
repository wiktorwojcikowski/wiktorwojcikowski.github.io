'use strict';

define([
  'angular'
], function(angular) {

  angular.module('testAngular.directivesExamples', ['ui.router'])
  .config(['$stateProvider', function($stateProvider) {

    $stateProvider
      .state('directives-examples', {
        url: '/directives-examples/',
        templateUrl: 'modules/directives-examples/examples.html',
        controller: 'ExamplesController'
      })
  }])
  .controller('ExamplesController', ['$scope', 'commonService', function($scope, commonService) {
    commonService.setTitle('Examples - directives');

    $scope.phoneNumber = 1231231234;
    $scope.amount = 5000000;

  }])
});