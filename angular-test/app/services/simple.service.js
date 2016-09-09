'use strict';

define([
  'angular',
  'app.module'
], function(angular, appModule) {

  angular.module('testAngular')
  .service('simpleService', [function() {
    var value = '';
    this.setValue = function(v) {
      value = v;
    }
    this.getValue = function() {
      return value;
    }
  }])
});