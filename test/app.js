const app = require('../app');

describe('app', function() {
  return app().then((res) => {
    it('app must resolve()', function() {
      return true;
    })
  })
})
