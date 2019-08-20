const expect = require('chai').expect;
const getConfig = require('../../config/getConfig');

describe('getConfig', function() {
  it('getConfig() should return {"naturalCashOut":{"percents":0.3,"week_limit":{"amount":1000,"currency":"EUR"}},"conversionRates":{"EUR":{"USD":1.1497,"JPY":129.53}},"cashIn":{"percents":0.03,"max":{"amount":5,"currency":"EUR"}},"juridicalCashOut":{"percents":0.3,"min":{"amount":0.5,"currency":"EUR"}}}', function() {
    return getConfig().then((conf) => {
      expect({
        naturalCashOut: {
          percents: 0.3,
          week_limit: {
            amount: 1000,
            currency: 'EUR'
          }
        },
        conversionRates: {
          EUR: {
            USD: 1.1497,
            JPY: 129.53
          }
        },
        cashIn: {
          percents: 0.03,
          max: {
            amount: 5,
            currency: 'EUR'
          }
        },
        juridicalCashOut: {
          percents: 0.3,
          min: {
            amount: 0.5,
            currency: 'EUR'
          }
        }
      }).to.deep.equal(conf);

    })
  });
})
