describe('TransactionController', function() {
  var transactionController;
  var scope;
  var transactionService;

  beforeEach(module('testapp'));
  beforeEach(function() {
    module(function($provide) { // create mock service
      $provide.service('TransactionService', function() {
        this.getTransactions = function() {};
      })
    });
  });
  beforeEach(inject(function($controller, $rootScope, TransactionService) {
    var scope = $rootScope.$new();
    transactionService = TransactionService;
    transactionController = $controller('TransactionController', {TransactionService: transactionService, $scope:scope});
  }));

  it('has a user named Helen Hood', function() {
    expect(transactionController.helen.firstName).toBe("Helen");
    expect(transactionController.helen.lastName).toBe("Hood");
  });
  it('has a user named David Crowell', function() {
    expect(transactionController.david.firstName).toBe("David");
    expect(transactionController.david.lastName).toBe("Crowell");
  });
  it('initially returns undefined for isChecked', function() {
    expect(transactionController.isChecked()).toBeUndefined();
  });
  it('returns true when isChecked is called if either cash or checked is true', function() {
    transactionController.cash = true;
    transactionController.credit = false;
    expect(transactionController.isChecked()).toBeTruthy();
    transactionController.cash = false;
    transactionController.credit = true;
    expect(transactionController.isChecked()).toBeTruthy();
  });
  it('calls getTransactions on service when checkbox is clicked', function() {
    spyOn(transactionService,'getTransactions');
    transactionController.cash = true;
    transactionController.clickedCheckbox();
    expect(transactionService.getTransactions).toHaveBeenCalledWith("cash");
  });
});