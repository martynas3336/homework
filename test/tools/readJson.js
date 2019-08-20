const chai = require('chai');
chai.use(require('chai-json'));
const expect = chai.expect;
const readJson = require('../../tools/readJson');

describe('readJson', function() {
  it('readJson should return a json', function() {
    expect(readJson('[{ "date": "2016-01-05", "user_id": 1, "user_type": "natural", "type": "cash_in", "operation": { "amount": 200.00, "currency": "EUR" } },{ "date": "2016-01-06", "user_id": 2, "user_type": "juridical", "type": "cash_out", "operation": { "amount": 300.00, "currency": "EUR" } },]')).to.be.jsonObj();
  })
})
