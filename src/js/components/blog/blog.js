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
                    this.postSelected = post
                },
                add() {
                    this.postSelected = {
                        isDraft: false
                    }
                    this.edit = true
                },
                save() {
                    PostService.save(this.postSelected).then((res) => {
                        if (angular.isUndefined(this.postSelected._id))
                            this.posts.unshift(res.data)
                        toastr.success(`${this.postSelected.title} saved`)
                        this.postSelected = null
                        this.edit = false
                    }).catch((err) => {
                        toastr.error(`${err.data}`)
                    })

                },
                delete(post) {
                    let idx = this.posts.findIndex(el => el._id === post._id)
                    this.posts.splice(idx, 1)
                    if (angular.isDefined(post._id)) {
                        PostService.delete(post).then(() => {
                            toastr.success(`${post.title} deleted`)
                            this.postSelected = null
                        }).catch((err) => {
                            toastr.error(`${err.data}`)
                        })
                    } else {
                        this.postSelected = null
                    }

                }
            })
        }]

    })
})(angular.module('app.blog'))
