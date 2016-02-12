(function() {
  var data = [
    {
      "type":"cash",
      "amount": "33.45"
    },
    {
      "type":"cash",
      "amount": "100.00"
    },
    {
      "type":"credit",
      "amount": "99.55"
    },
    {
      "type":"credit",
      "amount": "7.89"
    }
  ];

  function transactionService(dataService) {
    this.data = dataService;
    this.getTransactions = function (type) {
      var output = [];
      angular.forEach(this.data, function (value, key) {
        if (value.type === type) {
          output.push(value.amount);
        }
      });
      return output;
    }
  }

  /* default ngResource methods
  { 'get':    {method:'GET'},
    'save':   {method:'POST'},
    'query':  {method:'GET', isArray:true},
    'remove': {method:'DELETE'},
    'delete': {method:'DELETE'} };
    Full API documentation: https://docs.angularjs.org/api/ngResource/service/$resource
  */

  function posts($resource) {
    var resource = $resource("http://jsonplaceholder.typicode.com/posts/:post", {},{
      patch: {
        method:"PATCH"
      }
    });
    return resource;
  }


  angular.module("testapp").service("TransactionService", ["DataService",transactionService]);
  angular.module("testapp").value("DataService",data);
  angular.module("testapp").factory("Posts", ["$resource",posts]);
















  // For demonstration - not used by the app
  function transactionFactory(dataService) {
    var obj = {};
    obj.getTransactions = function(type) {
      var output = [];
      angular.forEach(dataService, function (value, key) {
        if (value.type === type) {
          output.push(value.amount);
        }
      });
      return output;
    };
    return obj;
  }
  angular.module("testapp").factory("TransactionFactory", ["DataService", transactionFactory]);

})();