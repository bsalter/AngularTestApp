!function(){angular.module("testapp",[])}(),function(){function a(a){var t=this;t.clickedCheckbox=function(){t.data=[],t.credit===!0&&(t.data=t.data.concat(a.getTransactions("credit"))),t.cash===!0&&(t.data=t.data.concat(a.getTransactions("cash")))},t.isChecked=function(){return t.credit||t.cash}}function t(a,t){t.clickedCheckbox=function(){t.data=[],t.credit===!0&&(t.data=t.data.concat(a.getTransactions("credit"))),t.cash===!0&&(t.data=t.data.concat(a.getTransactions("cash")))},t.isChecked=function(){return vm.credit||vm.cash}}angular.module("testapp").controller("TransactionController",["TransactionService",a]),angular.module("testapp").controller("ScopeyTransactionController",["TransactionService","$scope",t])}(),function(){function a(a){this.data=a,this.getTransactions=function(a){var t=[];return angular.forEach(this.data,function(n,c){n.type===a&&t.push(n.amount)}),t}}function t(a){var t={};return t.getTransactions=function(t){var n=[];return angular.forEach(a,function(a,c){a.type===t&&n.push(a.amount)}),n},t}var n=[{type:"cash",amount:"33.45"},{type:"cash",amount:"100.00"},{type:"credit",amount:"99.55"},{type:"credit",amount:"7.89"}];angular.module("testapp").service("TransactionService",["DataService",a]),angular.module("testapp").value("DataService",n),angular.module("testapp").factory("TransactionFactory",["DataService",t])}();