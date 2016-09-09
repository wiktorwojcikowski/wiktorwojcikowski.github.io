'use strict';

define([
  'angular',
  'app.module',

  'services/common.service',
  'services/simple.service',

  'directives/phone-number/phone-number.directive',
  'directives/currency/currency.directive',

  'modules/dynamic-pages/dynamic-pages.module',
  'modules/service-example/service-example.module',
  'modules/array/array.module',
  'modules/directives-examples/directives-examples.module',
  'modules/calculator/calculator.module',
  'modules/serial/serial.module',

], function(angular, appModule, commonService, simpleService) {

  var app = angular
    .module('testAngular')
  return app;
});