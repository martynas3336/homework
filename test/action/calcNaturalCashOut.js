const assert = require('chai').assert;
const calcNaturalCashOut = require('../../action/calcNaturalCashOut');

describe('calcNaturalCashOut', function() {
  it('calcNaturalCashOut({amount:300, feeConfig:{percents:0.03, max:{amount:5, currency:\'EUR\'}}}) should be equal to 0', function() {
    assert.equal(calcNaturalCashOut({amount:300, totalWeek:0, feeConfig:{percents:0.3, week_limit:{amount:1000, currency:'EUR'}}}), 0);
  });
  it('calcNaturalCashOut({amount:3000, feeConfig:{percents:0.03, max:{amount:5, currency:\'EUR\'}}}) should be equal to 6', function() {
    assert.equal(calcNaturalCashOut({amount:3000, totalWeek:0, feeConfig:{percents:0.3, week_limit:{amount:1000, currency:'EUR'}}}), 6);
  });
})
