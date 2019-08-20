const assert = require('chai').assert;
const expect = require('chai').expect;
const User = require('../../User');

describe('User', function() {
  let user = new User({user_id:1});

  it('new User must be instance of User', function() {
    expect(user).to.be.instanceof(User);
  })

  it('user.operation must return number', function() {
    assert.typeOf(user.operation({
      operationData: { date: "2016-01-06", user_id: 2, user_type: "juridical", type: "cash_out", operation: { amount: 300.00, currency: "EUR" }},
      feeConfig:{
        conversionRates: {
          EUR: {
            USD: 1.1497,
            JPY: 129.53
          }
        },
        juridicalCashOut: {
          percents: 0.3,
          min: {
            amount: 0.5,
            currency: 'EUR'
          }
        },
        cashIn: {
          percents: 0.03,
          max: {
            amount: 5,
            currency: 'EUR'
          }
        },
        naturalCashOut: {
          percents: 0.3,
          week_limit: {
            amount: 1000,
            currency: 'EUR'
          }
        }
      }

    }), "number");
  })

  it('user.operation must return number above or equal to 0', function() {
    expect(user.operation({
      operationData: { date: "2016-01-06", user_id: 2, user_type: "juridical", type: "cash_out", operation: { amount: 300.00, currency: "EUR" }},
      feeConfig:{
        conversionRates: {
          EUR: {
            USD: 1.1497,
            JPY: 129.53
          }
        },
        juridicalCashOut: {
          percents: 0.3,
          min: {
            amount: 0.5,
            currency: 'EUR'
          }
        },
        cashIn: {
          percents: 0.03,
          max: {
            amount: 5,
            currency: 'EUR'
          }
        },
        naturalCashOut: {
          percents: 0.3,
          week_limit: {
            amount: 1000,
            currency: 'EUR'
          }
        }
      }

    })).to.be.at.least(0);
  })
})
