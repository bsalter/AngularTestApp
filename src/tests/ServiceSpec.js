describe('TransactionService', function() {
  var transactionService;
  beforeEach(module('testapp'));
  beforeEach(inject(function($injector) {
    transactionService = $injector.get('TransactionService');
  }));
  it('returns the correct values when called with parameter: cash', function() {
    expect(transactionService.getTransactions('cash')).toEqual(['33.45','100.00']);
  });
  it('returns the correct values when called with parameter: credit', function() {
    expect(transactionService.getTransactions('credit')).toEqual(['99.55','7.89']);
  });
});