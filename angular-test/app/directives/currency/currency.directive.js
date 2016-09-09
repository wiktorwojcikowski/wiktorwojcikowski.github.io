'use strict';

define([
  'angular',
  'app.module',
], function(angular, testAngular) {
  angular.module('testAngular')
    .directive('currency', function () {
    return {
      require: 'ngModel',
      link: function (scope, element, attr, ngModelCtrl) {
        
        var formatter = function(number) {

          var val = '';
          
          var decimalPart = String(100 + (number % 100)).slice(-2);
          var entirely = String(number).slice(0, -2) || '0';
          val += '$'+ entirely.slice(0, entirely.length % 3);

          var parts = entirely.slice(entirely.length % 3).match(/.{1,3}/g) || []
          if (parts.length) {
            if (entirely.length % 3) {
              val += ',';
            }
            val += parts.join(',');
          }

          val += '.' + decimalPart;
          return val;
        }

        var updateView = function(value) {
          scope.$applyAsync(function () {
            ngModelCtrl.$setViewValue(value || '');
            ngModelCtrl.$render();
          });
        }

        function parsePhone(value) {
          if (value) {
            var cleanValue = String(value || '').replace(/[^0-9]/g, '');
            var valueString = formatter(Number(cleanValue));
            if (value !== valueString) {
              updateView(valueString);
            }
            return Number(cleanValue) / 100 || 0;
          }
          return undefined;
        }

        var formatPhone = function(value) {
          value = formatter(value);
          return value;
        }

        ngModelCtrl.$formatters.push(formatPhone);
        ngModelCtrl.$parsers.push(parsePhone);
      }
    };
  });

/*

    .directive('phoneNumber', [function() {
      return {
        //replace: true,
        //template: '<div >asd</div>',
        //require: 'ngModel',
        link: ['scope', 'element', 'attr', function(scope, element, attr) {
          //attrs.$set('ngTrim', "false");
            
          console.log(333);/*
          var formatter = function(str, isNum) {
            var parts = (str || '').match(/.{1,3}/g)
            val = '';
            if (parts.length >= 1 ) {
              val += '(' + parts[0];
              if (parts[0].length == 3) {
                val += ') ';
              }
            }
            if (parts.length >= 2) {
              val += parts[1];
              if (parts[1].length == 3) {
                val += '-';
              }
            }
            if (parts.length >= 3) {
              val += parts[2];
            }
            if (parts.length >= 4) {
              val += parts[3];
            }
            return val;
          }

          var updateView = function(val) {
            scope.$applyAsync(function () {
              ngModel.$setViewValue(val || '');
              ngModel.$render();
            });
          }

          var parsePhoness = function(value) {
            var cleanValue = String(value || '').replace(/[^0-9]/g, '');
            var viewValue = formatter(angular.copy(cleanValue || ''));
            //var modelString = formatter(ngModel.$modelValue);
            
            updateView(viewVal);

            return Number(cleanValue) || 0;
          }


          function parsePhone(value) {
            if (value) {
              var cleanValue = String(value || '').replace(/[^0-9]/g, '');
              if (cleanValue !== text) {
                updateView(cleanValue);
              }
              return cleanValue;
            }
            return undefined;
          }

          var formatPhone = function(value) {
            value = formatter(value);
            return parsePhone(value);
          }
          
          ngModel.$parsers.push(parsePhone);
          //ngModel.$formatters.push(formatPhone);
        }]
      }
    }])
*/
});