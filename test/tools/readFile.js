const expect = require('chai').expect;
const readFile = require('../../tools/readFile');

describe('readFile', function() {
  it('readFile(\'input.json\') should return a buffer', function() {
    expect(readFile('input.json')).to.be.instanceof(Buffer);
  })
})
