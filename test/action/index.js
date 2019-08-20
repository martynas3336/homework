const expect = require('chai').expect;
const action = require('../../action');

describe('action', function() {
  it('action(...) should return [0.06, 0.9]', function() {
    return action({
      operationsData:[
        { date: '2016-01-05', user_id: 1, user_type: "natural", type: "cash_in", operation: { amount: 200.00, currency: "EUR" } },
        { date: "2016-01-06", user_id: 2, user_type: "juridical", type: "cash_out", operation: { amount: 300.00, currency: "EUR" } }
      ],
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

    }).then((res) => {
      expect([0.06, 0.9]).to.have.deep.members(res);
    })
  })
})
