((app) => {
    'use strict'
    app.component("blog", {
        templateUrl: 'js/components/blog/blog.html',
        // mon coposant sera affiché dans le fichier blog.html//
        controller: ['$http', 'PostService', 'UserService', function($http, PostService, UserService) {
            //mon cotroller utilisera le service http qui est ://
            angular.extend(this, {
                posts: [],
                $onInit() {
                    this.edit = false
                    PostService.getPublished().then((res) => {
                        this.posts = res.data;
                    })

                    UserService.getCurrent().then((user) => {
                        this.isAdmin = user.isAdmin
                    }).catch((err) => {

                    })
                },
                edit(post) {
                    this.selectedPost = post
                },
                add() {
                    this.selectedPost = {
                        isDraft: true
                    }
                    this.edit = true
                },
                save() {
                    PostService.save(this.selectedPost).then((res) => {
                        if (angular.isUndefined(this.selectedPost._id))
                            this.posts[this.posts.length - 1] = res.data
                        toastr.success(`${this.selectedPost.title} saved`)
                    }).catch((err) => {
                        toastr.error(`${err.data}`)
                    })

                },
                delete(post) {
                    let idx = this.posts.find((el, idx) => {
                        if (el._id === post._id)
                            return idx
                    })
                    debugger
                    // this.posts.splice(idx, 1)
                    // if (angular.isDefined(post._id)) {
                    //     PostService.delete(post).then(() => {
                    //         toastr.success(`${post.title} deleted`)
                    //         this.selectedPost = null
                    //     }).catch((err) => {
                    //         toastr.error(`${err.data}`)
                    //     })
                    // } else {
                    //     this.selectedPost = null
                    // }

                }
            })
        }]

    })
})(angular.module('app.blog'))
