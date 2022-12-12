const checkJump = require('./index');

describe('Challenge 10', () => {
   test('Test #01 - expect return type boolean', () => {
      expect(typeof checkJump([1])).toBe('boolean');
   });
});