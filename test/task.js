const task = require('../task');

describe('task', function() {
  return task().then((res) => {
    it('task must resolve()', function() {
      return true;
    })
  })
})
