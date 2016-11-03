((app) => {
    'use strict'
    app.component("organi", {
        templateUrl: 'js/components/organi/organi.html',
        controller: [function() {
            angular.extend(this, {
                page: {
                    name: 'organi',
                    content: {}
                }
            })
        }]
    })
})(angular.module('app.organi'))
