'use strict';

/**
 * @ngdoc function
 * @name aaaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the aaaApp
 */
angular.module('aaaApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
