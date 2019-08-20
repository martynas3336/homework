const expect = require('chai').expect;
const requestCashInConfig = require('../../config/requestCashInConfig');

describe('requestCashInConfig', function() {
  it('requestCashInConfig() should return {"percents":0.03,"max":{"amount":5,"currency":"EUR"}}', function() {
    return requestCashInConfig().then((conf) => {
      expect({
        percents: 0.03,
        max: {
          amount: 5,
          currency: 'EUR'
        }
      }).to.deep.equal(conf);

    })
  });
})
