'use strict';

define([
  'angular',
  'app.module',
], function(angular, testAngular) {

  angular.module('testAngular')
    .service('commonService', [function() {
      var commonData = {};
      this.setTitle = function(title) {
        return commonData.title = title;
      }
      this.getCommon = function() {
        return commonData;
      }
    }])
});