const assert = require('chai').assert;
const calcWeek = require('../../tools/calcWeek');

describe('calcWeek', function() {
  it('calcWeek(\'2016-01-05\') should be equal to 2401', function() {
    assert.equal(calcWeek('2016-01-05'), 2401)
  });
  it('calcWeek(\'2016-01-06\') should be equal to 2401', function() {
    assert.equal(calcWeek('2016-01-06'), 2401)
  });
  it('calcWeek(\'2016-01-07\') should be equal to 2401', function() {
    assert.equal(calcWeek('2016-01-07'), 2401)
  });
  it('calcWeek(\'2016-01-10\') should be equal to 2401', function() {
    assert.equal(calcWeek('2016-01-10'), 2401)
  });
  it('calcWeek(\'2016-02-15\') should be equal to 2407', function() {
    assert.equal(calcWeek('2016-02-15'), 2407)
  });
  it('calcWeek(\'1970-01-01\') should be equal to 0', function() {
    assert.equal(calcWeek('1970-01-01'), 0)
  });
})
