const inputSchema = require('../../schemas/inputSchema');

describe('inputSchema', function() {

  it('should resolve()', function() {
    return inputSchema([
      { "date": "2016-01-05", "user_id": 1, "user_type": "natural", "type": "cash_in", "operation": { "amount": 200.00, "currency": "EUR" } }
    ]);
  })
})
