const checkJump = require('./index');

describe('Challenge 10', () => {
   test('Test #01 - expect return type boolean', () => {
      expect(typeof checkJump([1])).toBe('boolean');
   });

   test('Test #02 - Heights [1, 2, 1] True', () => {
      expect(checkJump([1, 2, 1])).toBe(true);
   });

   test('Test #03 - Heights [1, 3, 8, 5, 2] True', () => {
      expect(checkJump([1, 3, 8, 5, 2])).toBe(true);
   });

   test('Test #04 - Heights [1, 7, 3, 5] False', () => {
      expect(checkJump([1, 7, 3, 5])).toBe(false);
   });

   test('Test #05 - Heights [1, 2, 3, 2, 1] True', () => {
      expect(checkJump([1, 2, 3, 2, 1])).toBe(true);
   });

   test('Test #06 - Heights [1, 2, 2, 2, 1] True', () => {
      expect(checkJump([1, 2, 2, 2, 1])).toBe(true);
   });

   test('Test #07 - Heights [0, 1, 0] True', () => {
      expect(checkJump([0, 1, 0])).toBe(true);
   });

   test('Test #08 - Heights [2, 2, 2, 2] False', () => {
      expect(checkJump([2, 2, 2, 2])).toBe(false);
   });

   test('Test #09 - Heights [1, 2, 3] False', () => {
      expect(checkJump([1, 2, 3])).toBe(false);
   });

   test('Test #10 - Heights [1, 2, 3, 2, 1, 2, 3] False', () => {
      expect(checkJump([1, 2, 3, 2, 1, 2, 3])).toBe(false);
   });

   test('Test #11 - Heights [1, 1000, 900, 800] True', () => {
      expect(checkJump([1, 1000, 900, 800])).toBe(true);
   });

   test('Test #12 - Heights [1, 1000, 100, 800] False', () => {
      expect(checkJump([1, 1000, 100, 800])).toBe(false);
   });

   test('Test #13 - Heights [1, 1, 1, 1, 1, 1, 1, 1, 2, 1] True', () => {
      expect(checkJump([1, 1, 1, 1, 1, 1, 1, 1, 2, 1])).toBe(true);
   });

   test('Test #14 - Heights [1, 2, 3, 1, 3, 1] False', () => {
      expect(checkJump([1, 2, 3, 1, 3, 1])).toBe(false);
   });

   test('Test #15 - Heights [1, 3, 2, 5, 4, 3, 2, 1] False', () => {
      expect(checkJump([1, 3, 2, 5, 4, 3, 2, 1])).toBe(false);
   });
});