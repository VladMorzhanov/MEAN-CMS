angular.module('app').factory('UserService', UserService)

UserService.$inject = ['$http', 'Auth', '$location', '$q']

function UserService ($http) {
  // create a new object
  let userFactory = {}

  userFactory.currentUser = {}

  // get a single user
  userFactory.get = function (id) {
    return $http.get('/api/users/' + id)
  }

  // get all users
  userFactory.all = function () {
    return $http.get('/api/users/')
  }

  // create a user
  userFactory.create = function (userData) {
    return $http.post('/api/users/', userData)
  }

  // update a user
  userFactory.update = function (id, userData) {
    return $http.put('/api/users/' + id, userData)
  }

  // delete a user
  userFactory.delete = function (id) {
    return $http.delete('/api/users/' + id)
  }

  // get current user
  userFactory.current = function () {
    return $http.get('/api/me/')
  }

  // return our entire userFactory object
  return userFactory
}
