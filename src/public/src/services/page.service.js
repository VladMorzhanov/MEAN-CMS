angular.module('app').factory('PageService', PageService)

PageService.$inject = ['$http', 'Auth', '$location', '$q']

function PageService ($http) {
  //  create a new object
  let pageFactory = {}

  //  get a single page
  pageFactory.get = function (id) {
    return $http.get('/api/pages/' + id)
  }

  //  get all pages
  pageFactory.all = function () {
    return $http.get('/api/pages/')
  }

  //  get a single post
  pageFactory.getSinglePost = function (pageId, postId) {
    return $http.get('/api/pages/' + pageId + '/posts/' + postId)
  }

  //  get all posts
  pageFactory.allPosts = function (pageId) {
    return $http.get('/api/pages/' + pageId + '/posts/')
  }

  //  return our entire pageFactory object
  return pageFactory
}
