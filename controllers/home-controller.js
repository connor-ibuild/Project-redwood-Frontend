var HomeController = App.controller("HomeController", function ($scope, $http, $cookies, $location, $rootScope) {
  $scope.firstName = '';
  var key = $cookies.get('project-redwood-key');

  // get user data
  $http.get(apiUrl + '/user-data', {
    headers: {'key' : key}
  })
    .then(function (response) {
      $scope.firstName = response.data.firstname;
    },
      function (errorResponse) {
        $location.path('/sign-in');
      });
});
