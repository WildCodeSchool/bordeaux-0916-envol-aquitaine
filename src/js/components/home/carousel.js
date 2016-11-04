((app) => {
    'use strict'
    app.component("carousel", {

        bindings: {
            editMode:"<",
            ngModel: "="
        },
        templateUrl: 'js/components/home/carousel.html'

    })
})(angular.module('app.home'))
