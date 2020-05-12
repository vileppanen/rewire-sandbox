const sinon = require('sinon')
const rewire = require('rewire')
const rewiredModule = rewire('../src/foo')

describe('foo module', () => {
  describe('#hello', () => {
    let mocks
    const hello = rewiredModule.__get__('hello')
    beforeEach(() => {
      mocks = {
        bar: sinon.stub().returns('bar')
      }
    });
    it('FALSE POSITIVE: should return "hello bar"', () => {
      return rewiredModule.__with__({ ...mocks })(() => {
        const results = hello()
        expect(results).to.eql('hello bar')
      })
    });
  });
});