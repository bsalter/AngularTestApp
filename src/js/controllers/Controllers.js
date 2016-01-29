(function() {
  function transactionController(transactionService) {
    var vm = this;
    vm.clickedCheckbox = function() {
      vm.data = [];
      if(vm.credit === true) {
        vm.data = vm.data.concat(transactionService.getTransactions("credit"));
      }
      if(vm.cash === true) {
        vm.data = vm.data.concat(transactionService.getTransactions("cash"));
      }
    };
    vm.isChecked = function() {
      return vm.credit || vm.cash;
    };
  }
  angular.module("testapp").controller("TransactionController", ["TransactionService",transactionController]);















  // example of scope-soup, if you do not use Controller As syntax
  // For demonstration - not used by the app
  function scopeyTransactionController(transactionService,$scope) { // note: parameter order matters
    $scope.clickedCheckbox = function() {
      $scope.data = [];
      if($scope.credit === true) {
        $scope.data = $scope.data.concat(transactionService.getTransactions("credit"));
      }
      if($scope.cash === true) {
        $scope.data = $scope.data.concat(transactionService.getTransactions("cash"));
      }
    };
    $scope.isChecked = function() {
      return vm.credit || vm.cash;
    }
  }
  angular.module("testapp").controller("ScopeyTransactionController", ["TransactionService","$scope",scopeyTransactionController])
})();