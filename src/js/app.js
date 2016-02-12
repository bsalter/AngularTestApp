(function() {
  angular.module("testapp", ["ui.router","ngResource"]);

  angular.module("testapp").config(["$stateProvider","$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('tab1', {
        url: "/tab1",
        templateUrl: "templates/tab1.html",
        controller: "TransactionController",
        controllerAs: "vm"
      })
      .state('tab1.list', {
        url: "/list",
        templateUrl: "templates/tab1.list.html",
        controller: "ListController",
        controllerAs: "list"
      })
      .state('tab2', {
        url: "/tab2",
        templateUrl: "templates/tab2.html"
      });
    $urlRouterProvider.otherwise("/tab1");
  }]);
})();