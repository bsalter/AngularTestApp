(function() {

  function cowDirective() {
    return {
      restrict: "E",
      templateUrl: "templates/cow.html",
      link: function(scope, element) {
        element.hide();
        element.fadeIn(5000);
      }
    };
  }

  angular.module("testapp").directive("cow",cowDirective);

  function nameDirective() {
    return {
      restrict: "A",
      template: "User: {{user.firstName}} {{user.lastName}}",
      scope: {
        user: "=user"
        /* use = to bind to a variable (you will usually use this one)
           use @ to bind to the evaluation of a variable
           use & to bind to an executed function */
      }
    }
  }

  angular.module("testapp").directive("name",nameDirective);
})();