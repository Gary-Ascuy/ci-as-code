const { equal } = require('assert')

describe('app.js', () => {
  describe('.main()', () => {
    it('Should compare that 123 is equals to 123', () => {
      const actual = 123, expect = 123
      equal(actual, expect)
    })
  })
})
