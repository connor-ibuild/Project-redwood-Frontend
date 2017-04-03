var InvoiceController = App.controller("InvoiceController", function ($scope, $http) {
  $scope.invoiceData = {};
  $scope.errorMessage = '';

  $scope.createInvoice = function(isValid) {

    if (!isValid) {
      return;
    }

    var invoiceData_json = JSON.stringify($scope.invoiceData);

    $http.post('http://localhost:8888/play/sf-backend/web/app_dev.php/create-invoice',
    {
      'InvoiceData' : invoiceData_json
    })
      .then(function (response) {
        console.log('sent invoice data');
        console.log(response);
      });
  }

});
