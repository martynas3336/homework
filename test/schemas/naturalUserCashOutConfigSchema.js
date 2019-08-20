const inputSchema = require('../../schemas/naturalUserCashOutConfigSchema');

describe('naturalUserCashOutConfigSchema', function() {

  it('should resolve()', function() {
    return inputSchema({
      "percents": 0.3,
      "week_limit": {
        "amount": 1000,
        "currency": "EUR"
      }
    });
  })
})
