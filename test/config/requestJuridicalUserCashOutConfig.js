const expect = require('chai').expect;
const requestJuridicalUserCashOutConfig = require('../../config/requestJuridicalUserCashOutConfig');

describe('requestJuridicalUserCashOutConfig', function() {
  it('requestJuridicalUserCashOutConfig() should return {"percents":0.3,"min":{"amount":0.5,"currency":"EUR"}}', function() {
    return requestJuridicalUserCashOutConfig().then((conf) => {
      expect({
        percents: 0.3,
        min: {
          amount: 0.5,
          currency: 'EUR'
        }
      }).to.deep.equal(conf);

    })
  });
})
