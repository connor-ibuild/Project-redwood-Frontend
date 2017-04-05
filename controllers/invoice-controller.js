var InvoiceController = App.controller("InvoiceController", function ($scope, $http) {
  $scope.invoiceData = {};
  $scope.errorMessage = '';

  $scope.createInvoice = function(isValid) {

    if (!isValid) {
      return;
    }

    var invoiceData_json = JSON.stringify($scope.invoiceData);

    $http.post(apiUrl + '/create-invoice',
    {
      'InvoiceData' : invoiceData_json
    })
      .then(function (response) {
        console.log('sent invoice data');
        console.log(response);
      });
  }

});
