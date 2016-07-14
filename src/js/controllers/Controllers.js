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

    vm.david = {};
    vm.david.firstName = "David";
    vm.david.lastName = "Crowell";

    vm.helen = {};
    vm.helen.firstName = "Helen";
    vm.helen.lastName = "Hood";
  }

  function listController(posts) {
    var vm = this;
    vm.post = posts.get({post:1});
    posts.patch({post:1}, {title: "Bacon is great", body: "I love bacon"}).$promise.then(function(data) {
      console.log(data);
    });
  }

  function tab2Controller($scope) {
    var tab2 = this;
    tab2.timeoutCompleted = "No!";
    $scope.$watch(function() {
      console.log("digest loop ran!");
    });
    $scope.$watch("tab2.color.name", function(newValue, oldValue) {
      console.log("Old value: " + oldValue);
      console.log("New value: " + newValue);
    });
    setTimeout(function() {
      $scope.$apply(function() {
        tab2.timeoutCompleted = "Yes!";
      });
    }, 1000);
  }

  angular.module("testapp").controller("TransactionController", ["TransactionService",transactionController]);
  angular.module("testapp").controller("ListController",["Posts",listController]);
  angular.module("testapp").controller("Tab2Controller", ["$scope",tab2Controller]);













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