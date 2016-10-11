((app) => {
    'use strict'
    app.component("footer", {
        templateUrl: 'js/components/common/footer.html',
        bindings: {
            ngModel: '=',
            editMode: '<'
        },
        controller: [function() {
            angular.extend(this,{})
        }]
    })
})(angular.module('app.common'))
