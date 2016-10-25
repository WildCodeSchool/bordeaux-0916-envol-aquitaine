((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider) => {
        $stateProvider.state('app.organi', {
            url:'/organi',
            template: '<organi />'
        })
    }])
})(angular.module('app.organi', ['ui.router']))
