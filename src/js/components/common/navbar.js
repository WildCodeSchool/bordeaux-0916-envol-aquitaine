((app) => {
    'use strict'
    app.component("navbar", {
        templateUrl: 'js/components/common/navbar.html',
        bindings: {
            user: '<'
        },
        controller: ['$document','$scope', function($document, $scope) {
            angular.extend(this, {
              $onInit() {
                  $document.bind('scroll', () => {
                      $scope.$apply(() =>{
                          this.fixedNav = ($document.scrollTop() > 256)
                      });

                  });
              }
            })
        }]
    })
})(angular.module('app.common'))
