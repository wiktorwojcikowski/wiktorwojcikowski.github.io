'use strict';

define([
  'angular'
], function(angular) {

  angular.module('testAngular.calculator', ['ui.router'])
  .config(['$stateProvider', function($stateProvider) {

    $stateProvider
      .state('calculator', {
        url: '/calculator/',
        templateUrl: 'modules/calculator/calculator.html',
        controller: 'CalculatorController'
      })
  }])
  .controller('CalculatorController', ['$scope', 'commonService', function($scope, commonService) {
    commonService.setTitle('Calculator');

    $scope.parts = [100, 100, 100];
    $scope.sum = 0

    var sumUp = function() {
      $scope.sum = $scope.parts.reduce(function(p, c) { return p + c; }, 0);
    }
    var split = function() {
      var prevSum = $scope.parts.reduce(function(p, c) { return p + c; }, 0);
      var diff = $scope.sum - prevSum;
      if (diff) {
        $scope.parts = [
          $scope.parts[0]/prevSum * $scope.sum,
          $scope.parts[1]/prevSum * $scope.sum,
          $scope.parts[2]/prevSum * $scope.sum,
        ];
      }
    }

    $scope.$watch('parts', sumUp, true)
    $scope.$watch('sum', split)

    sumUp();

  }])
});