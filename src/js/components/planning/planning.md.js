((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider) => {
        $stateProvider.state('app.planning', {
            url:'/planning',
            template: '<planning />'
        })
    }])
})(angular.module('app.planning', ['ui.router']))
