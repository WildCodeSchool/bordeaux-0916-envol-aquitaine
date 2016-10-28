((app) => {
    'use strict'
    app.component("planning", {
        templateUrl: 'js/components/planning/planning.html',

        controller :[function() {

          angular.extend(this,{
            $onInit(){
              this.planning = "gojunior"
            }
          })

        }]

    })

  })(angular.module('app.planning'))
