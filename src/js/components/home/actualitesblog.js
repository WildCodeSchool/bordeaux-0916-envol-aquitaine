((app) => {
    'use strict'
    app.component("actualitesblog", {
        templateUrl: 'js/components/home/actualitesblog.html',
        controller: ['PostService', function(PostService) {
            PostService.getPublished().then((res) => {
                this.posts = res.data;
            })
        }]
    })
})(angular.module('app.common'))
