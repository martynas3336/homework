const expect = require('chai').expect;
const requestNaturalUserCashOutConfig = require('../../config/requestNaturalUserCashOutConfig');

describe('requestNaturalUserCashOutConfig', function() {
  it('requestNaturalUserCashOutConfig() should return {"percents":0.3,"week_limit":{"amount":1000,"currency":"EUR"}}', function() {
    return requestNaturalUserCashOutConfig().then((conf) => {
      expect({
        percents: 0.3,
        week_limit: {
          amount: 1000,
          currency: 'EUR',
        }
      }).to.deep.equal(conf);

    })
  });
})
