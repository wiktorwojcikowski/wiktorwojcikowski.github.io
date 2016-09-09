'use strict';

define([
  'angular'
], function(angular) {

  angular.module('testAngular.serial', ['ui.router'])
  .config(['$stateProvider', function($stateProvider) {

    $stateProvider
      .state('serial', {
        url: '/serial/',
        templateUrl: 'modules/serial/serial.html',
        controller: 'SerialController'
      })
  }])
  .controller('SerialController', ['$scope', 'commonService', '$window', function($scope, commonService, $window) {
    commonService.setTitle('Serial field');

    $scope.parts = ['', '', ''];

    $scope.check = function(i) {
      if ($scope.parts[i].length == 5 && i < 2) {
        $window.document.getElementById('serial-'+(i+1)).focus();
      }
      if ($scope.parts[i].length == 0 && i > 0) {
        $window.document.getElementById('serial-'+(i-1)).focus();
      }
    }

    $scope.check(1);

  }])
});