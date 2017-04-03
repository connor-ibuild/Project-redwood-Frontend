
var SidebarController = App.controller("SidebarController", function ($scope, $http, $cookies, $location) {
  $scope.logout = function($event) {
    $event.preventDefault();
    var key = $cookies.get('project-redwood-key');

    $http.get('http://localhost:8888/play/sf-backend/web/app_dev.php/logout',
    {
      headers: {'key' : key}
    })
      .then(function (response) {
        $cookies.remove('project-redwood-key');
        $location.path('/sign-in');
      });
  }
});
