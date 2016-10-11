((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider) => {
        $stateProvider.state('app.contactform', {
            url:'/contactform',
            template: '<contactform />'
        })
    }])
})(angular.module('app.contactform', ['ui.router']))
