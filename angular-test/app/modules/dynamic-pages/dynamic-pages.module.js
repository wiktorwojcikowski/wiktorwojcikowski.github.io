'use strict';

define([
  'angular'
], function(angular) {

  angular.module('testAngular.dynamicPages', ['ui.router'])
  .config(['$stateProvider', '$urlMatcherFactoryProvider', function($stateProvider, $urlMatcherFactoryProvider) {

    var firstUpper = function(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    $urlMatcherFactoryProvider.type("url", {
      encode: function(val) { 
        return val.join('/'); 
      },
      decode: function(val) { 
        return val.split('/'); 
      },
      is: function(val) { return typeof val !== 'string'; },// true; this.pattern.test(val); },
      //pattern: /[^/]+,[^/]+/
    });

    $stateProvider
      .state('dynamic-pages', {
        url: '/dynamic-pages/',
        templateUrl: 'modules/dynamic-pages/list.html',
        controller: 'ListController'
      })
      .state('dynamic-pages.show', {
        url: '{pageUrl:url}/',
        resolve: {
          controller: ['$stateParams', '$q', function($stateParams, $q) {
            return $q(function(resolve, reject) {
              require(['modules/dynamic-pages/controllers/' + $stateParams.pageUrl[0]], function() { 
                resolve(firstUpper($stateParams.pageUrl[0]) + 'Controller');
              });
            });
          }],
          subController: ['$stateParams', '$q', function($stateParams, $q) {
            return $stateParams.pageUrl.length <= 1 ? '' : $q(function(resolve, reject) {
              require(['modules/dynamic-pages/controllers/' + $stateParams.pageUrl[0] + '-' + $stateParams.pageUrl[1]], function() { 
                resolve(firstUpper($stateParams.pageUrl[0]) + firstUpper($stateParams.pageUrl[1]) + 'Controller');
              });
            });
          }]
        },
        views : {
          "" : {
            templateUrl: function ($stateParams) {
              return '/modules/dynamic-pages/views/' + $stateParams.pageUrl[0] + '.html';
            },
            controllerProvider: ['controller', function (controller) {
              return controller;
            }],
          },
          "aditional": {
            templateUrl: function ($stateParams) {
              if ($stateParams.pageUrl.length > 1) {
                return '/modules/dynamic-pages/views/' + $stateParams.pageUrl[0] + '-' + $stateParams.pageUrl[1] + '.html';
              } else {
                return '';
              }
            },
            controllerProvider: ['subController', function (subController) {
              return subController;
            }],
          }
        }
      })

  }])
  .controller('ListController', ['$scope', '$state', 'commonService', function($scope, $state, commonService) {
    commonService.setTitle('Dynamic Pages');
    $scope.dynamicPages = ['simple', 'simple2', 'advanced']
    $scope.$state = $state;
  }]);
});