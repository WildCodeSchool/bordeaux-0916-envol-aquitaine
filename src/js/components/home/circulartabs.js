((app) => {
    'use strict'
    app.component("circulartabs", {
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
