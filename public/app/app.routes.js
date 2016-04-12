/**
 * Angular routes management
 */
angular.module('app.routes', ['ngRoute'])

    .config(function ($routeProvider, $locationProvider) {
        $routeProvider

            .when('/forbidden',
                {
                    templateUrl: 'app/views/pages/forbidden.html'
                })

            /**
             * Routes for simple users
             */
            //home page route
            .when('/',
                {
                    templateUrl: 'app/views/pages/home.html',
                    controller: 'mainController',
                    controllerAs: 'home'
                })

            //login page
            .when('/login',
                {
                    templateUrl: 'app/views/pages/users/login.html',
                    controller: 'mainController',
                    controllerAs: 'login'
                })

            //show all users
            .when('/users',
                {
                    templateUrl: 'app/views/pages/users/all.html',
                    controller: 'userController',
                    controllerAs: 'user'
                })

            //form to create a new user
            //same view as edit page
            .when('/users/create',
                {
                    templateUrl: 'app/views/pages/users/signup.html',
                    controller: 'userCreateController',
                    controllerAs: 'user'
                })

            // page to edit a user
            .when('/users/:user_id', {
                templateUrl: 'app/views/pages/users/single.html',
                controller: 'userEditController',
                controllerAs: 'user'
            })

            /**
             * Routes for admin users
             */
            //admin panel route
            .when('/admin-panel',
                {
                    templateUrl: 'app/views/admin-panel.html',
                    controller: 'mainController',
                    controllerAs: 'panel',
                    resolve: {
                        validate: function ($q, $location) {
                            // Either you could maintain an array of hashes on client side
                            // a user do not have access to without login
                            // Or hit the backend url to check it more securely
                            var validateAccess = $q.defer();
                            var isAllowed = ['profile', 'index', 'dashboard'].indexOf($location.hash()) !== -1;

                            if (!isAllowed) {
                                $location.path('/login');
                            }

                            validateAccess.resolve();
                            return validateAccess.promise;
                        }
                    }
                })
            .otherwise({
                redirectTo: '/'
            });


        //set our app up to have pretty URLS
        $locationProvider.html5Mode(true);
    });