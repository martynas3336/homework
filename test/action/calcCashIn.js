const assert = require('chai').assert;
const calcCashIn = require('../../action/calcCashIn');

describe('calcCashIn', function() {
  it('calcCashIn({amount:200, feeConfig:{percents:0.03, max:{amount:5, currency:\'EUR\'}}}) should be equal to 0.06', function() {
    assert.equal(calcCashIn({amount:200, feeConfig:{percents:0.03, max:{amount:5, currency:'EUR'}}}), 0.06);
  });
  it('calcCashIn({amount:200, feeConfig:{percents:0.03, max:{amount:5, currency:\'EUR\'}}}) should be equal to 0.06', function() {
    assert.equal(calcCashIn({amount:200, feeConfig:{percents:0.03, max:{amount:5, currency:'EUR'}}}), 0.06);
  });
})
