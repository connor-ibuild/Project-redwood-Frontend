var App = angular.module("App", ["ngRoute", "ngCookies"]);

App.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {

  $routeProvider.when('/home', {
    templateUrl: 'views/home.html',
    controller: 'HomeController',
  })
  .when('/sign-in', {
    templateUrl: 'views/sign-in.html',
    controller: 'LoginController',
  })
  .when('/sign-up', {
    templateUrl: 'views/sign-up.html',
    controller: 'RegisterController',
  })
  .when('/quote', {
    templateUrl: 'views/quote.html',
    controller: 'QuoteController',
  })
  .when('/invoice', {
    templateUrl: 'views/invoice.html',
    controller: 'InvoiceController',
  })
  .when('/invoice/new', {
    templateUrl: 'views/invoice-new.html',
    controller: 'InvoiceController'
  })
  .when('/test', {
    templateUrl: 'views/test.html',
  }).otherwise({
    redirectTo: '/home'
  });

  $locationProvider.html5Mode(true);
}]);

App.run(['$rootScope', function ($rootScope) {
  $rootScope.baseUrl = '/play/project-redwood';

  $rootScope.templates = {
    header: $rootScope.baseUrl + '/views/header.html',
    headerLoggedOut: $rootScope.baseUrl + '/views/header-logged-out.html',
    sidebar: $rootScope.baseUrl + '/views/sidebar.html'
  };
}]);
