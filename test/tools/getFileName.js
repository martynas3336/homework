const assert = require('chai').assert;
const getFileName = require('../../tools/getFileName');

describe('getFileName', function() {
  it('getFileName([\'a\', \'b\', \'c\', \'d\']) should be equal to \'c\'', function() {
    assert.equal(getFileName(['a', 'b', 'c', 'd']), 'c');
  });
  it('getFileName([\'b\', \'c\', \'d\', \'e\']) should be equal to \'d\'', function() {
    assert.equal(getFileName(['b', 'c', 'd', 'e']), 'd');
  })
})
