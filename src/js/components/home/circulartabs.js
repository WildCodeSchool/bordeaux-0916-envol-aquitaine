((app) => {
    'use strict'
    app.component("circulartabs", {
        bindings:{
          editMode:"<",
          ngModel:"="
        },
        templateUrl: 'js/components/home/circulartabs.html',
        controller: [function(){
          angular.extend(this,{
            $onInit(){
                this.tab = "pilates"
            }
          })
        }]
    })
})(angular.module('app.home'))
