const assert = require('chai').assert;
const calcJuridicalCashOut = require('../../action/calcJuridicalCashOut');

describe('calcJuridicalCashOut', function() {
  it('calcJuridicalCashOut({amount:300, feeConfig:{percents:0.03, max:{amount:5, currency:\'EUR\'}}}) should be equal to 0.9', function() {
    assert.equal(calcJuridicalCashOut({amount:300, feeConfig:{percents:0.3, min:{amount:0.5, currency:'EUR'}}}), 0.9);
  });
  it('calcJuridicalCashOut({amount:300, feeConfig:{percents:0.03, max:{amount:5, currency:\'EUR\'}}}) should be equal to 0.9', function() {
    assert.equal(calcJuridicalCashOut({amount:300, feeConfig:{percents:0.3, min:{amount:0.5, currency:'EUR'}}}), 0.9);
  });
})
