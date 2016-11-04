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
                page: {
                    name: 'contactform',
                    content: {}
                }
            })
        }

    })
})(angular.module('app.home'))
