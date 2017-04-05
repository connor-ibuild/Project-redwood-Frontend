var LoginController = App.controller("LoginController", function ($scope, $http, $location, $cookies) {
  $scope.formData = {};
  $scope.errorMessage = '';

  $scope.submitForm = function(isValid) {
    if (!isValid) {
      return;
    }

    var formData_json = JSON.stringify($scope.formData);

    $http.post(apiUrl + '/login',
    {
      'LoginData' : formData_json
    })
      .then(function (response) {
        $cookies.put('project-redwood-key', response.data.key);
        $scope.errorMessage = '';
        $location.path('/home');
      },
        function (errorResponse) {
          $scope.errorMessage = errorResponse.data;
        });
  }
});
