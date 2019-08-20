const expect = require('chai').expect;
const requestConfig = require('../../config/requestConfig');

describe('requestConfig', function() {
  it('requestConfig("cashIn") should return {"percents":0.03,"max":{"amount":5,"currency":"EUR"}}', function() {
    return requestConfig("cashIn").then((conf) => {
      expect({
        percents: 0.03,
        max: {
          amount: 5,
          currency: 'EUR'
        }
      }).to.deep.equal(conf);
    })
  });

  it('requestConfig("juridicalCashOut") should return {"percents":0.3,"min":{"amount":0.5,"currency":"EUR"}}', function() {
    return requestConfig("juridicalCashOut").then((conf) => {
      expect({
        percents: 0.3,
        min: {
          amount: 0.5,
          currency: 'EUR'
        }
      }).to.deep.equal(conf);
    })
  });

  it('requestConfig("naturalCashOut") should return {"percents":0.3,"week_limit":{"amount":1000,"currency":"EUR"}}', function() {
    return requestConfig("naturalCashOut").then((conf) => {
      expect({
        percents: 0.3,
        week_limit: {
          amount: 1000,
          currency: 'EUR',
        }
      }).to.deep.equal(conf);
    })
  });

  it('requestConfig("conversionRates") should return {"EUR":{"USD":1.1497,"JPY":129.53}}', function() {
    return requestConfig("conversionRates").then((conf) => {
      expect({
        EUR: {
          USD: 1.1497,
          JPY: 129.53
        }
      }).to.deep.equal(conf);
    })
  });
})
