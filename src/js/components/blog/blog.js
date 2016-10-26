((app) => {
    'use strict'
    app.component("blog", {
        templateUrl: 'js/components/blog/blog.html',
        // mon coposant sera affiché dans le fichier blog.html//
        controller: ['$http', function($http) {
            //mon cotroller utilisera le service http qui est ://
            angular.extend(this, {
                //  this est mon controlleur //
                posts: [],
                //mes posts seront dans un tableau//
                $onInit() {
                    //Aprés le chargement du component faire ce qui suit//
                    this.posts = [{
                            title: "Whaouuuuuuu",
                            author: "Alexis",
                            createdAt: "1477409698997",
                            body: "dksjfhkdjshfkjsdhfkdshfkjsdhfkjshdfkshdkfhdskfh",
                            image: "http://loremflickr.com/600/300"
                        }, {
                            title: "Azertyyyyyyyyyyyyyy",
                            author: "Oussou",
                            createdAt: "1477409698989",
                            body: "dksjfhkdjshfkjsdhfkdshfkjsdhfkjshdfkshdkfhdskfh",
                            image: "http://loremflickr.com/600/300"
                        },
                        {
                            title: "Whauuuu",
                            author: "Oussou",
                            createdAt: "1477409698921",
                            body: "Lorem",
                            image: "http://loremflickr.com/600/300"
                        }]
                        //Declaration des données de 2 posts//
                },
                savePost() {
                  this.edit = false;
                    if (!this.postSelected.createdAt) {
                        //NOUVEAU
                        this.postSelected.createdAt = Date.now();
                        this.posts.unshift(this.postSelected);
                        this.postSelected = null;
                    } else {
                        //EDITION
                        this.posts.forEach((post) => {
                          if (post.createdAt === this.postSelected.createdAt){
                            post = this.postSelected
                            return
                          }
                        })
                    }
                }
            })
        }]

    })
})(angular.module('app.blog'))
