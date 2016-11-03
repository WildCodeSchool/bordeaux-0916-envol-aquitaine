((app) => {
    'use strict'
    app.component("inscription", {
        templateUrl: 'js/components/inscription-tarif/inscription.html',
        controller: [function() {
            angular.extend(this, {
                page: {
                    name: 'inscription',
                    content: {}
                }
            })
        }]
    })

})(angular.module('app.inscription'))
