const conversionRatesConfigSchema = require('../../schemas/conversionRatesConfigSchema');

describe('conversionRatesConfigSchema', function() {

  it('should resolve()', function() {
    return conversionRatesConfigSchema({
        "EUR": {
            "USD": 1.1497,
            "JPY": 129.53
        }
    });
  })
})
