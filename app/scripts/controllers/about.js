'use strict';

/**
 * @ngdoc function
 * @name aaaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the aaaApp
 */
angular.module('aaaApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
