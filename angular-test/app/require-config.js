'use strict';



require.config({
  paths: {
    angular: 'bower_components/angular/angular',
    angularUiRouter: 'bower_components/angular-ui-router/release/angular-ui-router',
    angularMaterial: 'bower_components/angular-material/angular-material',
    angularAnimate: 'bower_components/angular-animate/angular-animate',
    angularAria: 'bower_components/angular-aria/angular-aria',
    angularMessages: 'bower_components/angular-messages/angular-messages',
    angularMaterialIcons: 'bower_components/angular-material-icons/angular-material-icons'
  },
  shim: {
    'angular' : {'exports' : 'angular'},
    'angularUiRouter': ['angular'],
    'angularMaterial': ['angular', 'angularAnimate', 'angularAria', 'angularMessages'],
    'angularAnimate': ['angular'],
    'angularAria': ['angular'],
    'angularMessages': ['angular'],
    'angularMaterialIcons': ['angular'],
  },
  priority: [
    "angular"
  ]
});

require([
  'angular',
  'app'
  ], function(angular, app) {
    var $html = angular.element(document.getElementsByTagName('html')[0]);
    angular.element().ready(function() {
      angular.bootstrap(document, ['testAngular']);
    });
  }
);