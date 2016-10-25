((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider) => {
        $stateProvider.state('app.inscription', {
            url:'/inscription-tarif',
            template: '<inscription />'
        })
    }])
})(angular.module('app.inscription', ['ui.router']))
