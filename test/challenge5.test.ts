// calculate the sum of numbers from 1 to 10
import { expect } from 'chai'
import { summation } from '../src/challenge5'

describe('print and calculate the sum of numbers from 1 to 10', function() {
  describe('#summation()', function() {
    it('should print and calculate the sum of numbers from 1 to 10', function() {
      expect(summation(10)).to.deep.equal(55);
    });
  });
});