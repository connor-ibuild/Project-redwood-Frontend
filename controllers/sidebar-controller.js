
var SidebarController = App.controller("SidebarController", function ($scope, $http, $cookies, $location) {
  $scope.logout = function($event) {
    $event.preventDefault();
    var key = $cookies.get('project-redwood-key');

    $http.get(apiUrl + '/logout',
    {
      headers: {'key' : key}
    })
      .then(function (response) {
        $cookies.remove('project-redwood-key');
        $location.path('/sign-in');
      });
  }
});
