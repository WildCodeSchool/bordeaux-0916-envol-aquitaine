((app) => {
    'use strict'
    app.component("blog", {
        templateUrl: 'js/components/blog/blog.html',
        // mon coposant sera affiché dans le fichier blog.html//
        controller: ['$http', function($http) {
          //mon cotroller utilisera le service http qui est ://
            angular.extend(this, {
                //  this est mon controlleur //
                posts:[],
                post: {},
                //mes posts seront dans un tableau//
                $onInit() {
                  //Aprés le chargement du component faire ce qui suit//
                    this.posts = [
                      {title:"Whaouuuuuuu", author:"Alexis", createdAt:"12/00/2015", body:"dksjfhkdjshfkjsdhfkdshfkjsdhfkjshdfkshdkfhdskfh", image:"http://loremflickr.com/600/300"},
                      {title:"Azertyyyyyyyyyyyyyy", author:"Oussou", createdAt:"12/00/2015", body:"dksjfhkdjshfkjsdhfkdshfkjsdhfkjshdfkshdkfhdskfh", image:"http://loremflickr.com/600/300"}
                    ]
                    //Declaration des données de 2 posts//
                },
                addPost(){
                  this.post.createdAt = Date.now();
                  this.posts.unshift(this.post);
                  this.tab = 0;
                  this.post ={};
                }
            })
        }]

    })
})(angular.module('app.blog'))
