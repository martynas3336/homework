const expect = require('chai').expect;
const assert = require('chai').assert;
const Operation = require('../../Operation');

describe('Operation', function() {
  let operation = new Operation({
    date:'2019-08-09',
    user_id:1,
    user_type:'natural',
    type:'cash_in',
    operation: {
      amount: 200.00,
      currency: "EUR"
    },
    totalWeek: {
      natural: {
        cash_in:0,
        cash_out:0,
      },
      juridical: {
        cash_in:0,
        cash_out:0,
      }
    },
    feeConfig: {
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
    }});
  it('new Operation should return Operation instance', function() {
    expect(operation).to.be.instanceof(Operation);
  })

  it('operation.calculateAmount() typeof must be number', function() {
    assert.typeOf(operation.calculateAmount(), 'number');
  })

  it('operation.calculateAmount() return must be above 0', function() {
    expect(operation.calculateAmount()).to.be.above(0);
  })


  it('operation.calculateFee() typeof must be number', function() {
    assert.typeOf(operation.calculateFee(), 'number');
  })

  it('operation.calculateFee() return must be above or equal to 0', function() {
    expect(operation.calculateFee()).to.be.at.least(0);
  })


  it('operation.getAmount() typeof must be number', function() {
    assert.typeOf(operation.getAmount(), 'number');
  })

  it('operation.getAmount() return must be above or equal to 0', function() {
    expect(operation.getAmount()).to.be.at.least(0);
  })


  it('operation.getUserType() typeof must be string', function() {
    assert.typeOf(operation.getUserType(), 'string');
  })

  it('operation.getUserType() return must be either "natural" or "juridical"', function() {
    expect(["juridical", "natural"]).to.include(operation.getUserType());
  })


  it('operation.getType() typeof must be string', function() {
    assert.typeOf(operation.getType(), 'string');
  })

  it('operation.getType() return must be either "cash_in" or "cash_out"', function() {
    expect(["cash_in", "cash_out"]).to.include(operation.getType());
  })
})
