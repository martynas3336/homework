const cashInConfigSchema = require('../../schemas/cashInConfigSchema');

describe('cashInConfigSchema', function() {

  it('should resolve()', function() {
    return cashInConfigSchema({
      "percents": 0.03,
      "max": {
        "amount": 5,
        "currency": "EUR"
      }
    });
  })
})
