((app) => {
    'use strict'
    app.component("planning", {
        templateUrl: 'js/components/planning/planning.html',
    controller: ('ScrollController', ['$scope', '$location', '$anchorScroll',
    function($scope, $location, $anchorScroll) {
      $scope.gotoBottom = function() {
        // set the location.hash to the id of
        // the element you wish to scroll to.
        $location.hash('planningadult');

        // call $anchorScroll()
        $anchorScroll();
      };
    }])
    })

  })(angular.module('app.planning'))
