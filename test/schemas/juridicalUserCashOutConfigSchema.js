const inputSchema = require('../../schemas/juridicalUserCashOutConfigSchema');

describe('juridicalUserCashOutConfigSchema', function() {

  it('should resolve()', function() {
    return inputSchema({
      "percents": 0.3,
      "min": {
        "amount": 0.5,
        "currency": "EUR"
      }
    });
  })
})
