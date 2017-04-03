
var RegisterController = App.controller("RegisterController", function ($scope, $http, $cookies, $location) {

  $scope.formData = {};
  $scope.errorMessage = '';

  $scope.submitForm= function (isValid) {
    if (!isValid) {
      return;
    }

    MyJSON = JSON.stringify($scope.formData);

    $http.post('http://localhost:8888/play/sf-backend/web/app_dev.php/register',
    {
      'JsonData' : MyJSON
    })
      .then(function (response) {
        $scope.errorMessage = response.data.message;
        $cookies.put('project-redwood-key', response.data.key);
        $location.path('/home');
    });
  }
});
