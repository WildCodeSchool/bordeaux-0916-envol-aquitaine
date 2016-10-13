((app) => {
    'use strict'
    app.component("footernans", {
        templateUrl: 'js/components/common/footernans.html',
        bindings: {
            ngModel: '=',
            editMode: '<'
        },
        controller: [function() {
            angular.extend(this,{})
        }]
    })
})(angular.module('app.common'))
