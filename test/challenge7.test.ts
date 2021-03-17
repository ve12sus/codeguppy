// calculate the sum of odd numbers greater than 10 and less or equal than 30

import { expect } from 'chai'
import { sumOfOdd } from '../src/challenge7'

describe('calculate the sum of odd numbers greater than 10 and less or equal than 30', function() {
  describe('#sumOfOdd()', function() {
    it('should calculate the sum of odd numbers greater than 10 and less or equal than 30', function() {
      expect(sumOfOdd()).to.deep.equal(200);
    });
  });
});
