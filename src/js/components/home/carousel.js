((app) => {
    'use strict'
    app.component("carousel", {

        bindings: {
            editMode:"<",
            ngModel: "="
        },
        templateUrl: 'js/components/home/carousel.html',
        controller: function() {
            angular.extend(this, {
                
            })
        }

    })
})(angular.module('app.home'))
