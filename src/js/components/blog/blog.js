((app) => {
    'use strict'
    app.component("blog", {
        templateUrl: 'js/components/blog/blog.html',
        // mon coposant sera affiché dans le fichier blog.html//
        controller: ['$http', 'PostService', function($http, PostService) {
            //mon cotroller utilisera le service http qui est ://
            angular.extend(this, {
                posts: [],
            $onInit() {
                this.startIndex = 0
                PostService.getPublished().then((res) => {
                    this.posts = res.data;
                    // this.posts.body = res.data[1].content
                    console.log(res.data[1].content)
                  })
            }
        })
    }]

})
})(angular.module('app.blog'))