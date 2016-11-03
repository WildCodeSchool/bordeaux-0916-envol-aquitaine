((app) => {
    'use strict'
    app.component("carousel", {
        templateUrl: 'js/components/home/carousel.html',
        controller: [function() {
            angular.extend(this, {
                page: {
                    name: 'carousel',
                    content: {}
                }
            })
        }]
    })
})(angular.module('app.home'))
