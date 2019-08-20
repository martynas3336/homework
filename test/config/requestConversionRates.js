const expect = require('chai').expect;
const requestConversionRates = require('../../config/requestConversionRates');

describe('requestConversionRates', function() {
  it('requestConversionRates() should return {"EUR":{"USD":1.1497,"JPY":129.53}}', function() {
    return requestConversionRates().then((conf) => {
      expect({
        EUR: {
          USD: 1.1497,
          JPY: 129.53
        }
      }).to.deep.equal(conf);

    })
  });
})
