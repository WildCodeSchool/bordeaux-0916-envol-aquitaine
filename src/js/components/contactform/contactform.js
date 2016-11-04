((app) => {
    'use strict'
    app.component("contactform", {
        templateUrl: 'js/components/contactform/contactform.html',
        controller: function() {
            angular.extend(this, {
                page: {
                    name: 'contactform',
                    content: {}
                }
            })
        }
    })
})(angular.module('app.contactform'))
