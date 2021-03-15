// Calculate the average of the numbers in an array of numbers

import { expect } from 'chai'
import { avgArray } from '../src/challenge11'

describe('Calculate the average of the numbers in an array of numbers', function() {
  describe('#avgArray()', function() {
    it('should Calculate the average of the numbers in an array of numbers', function() {
      expect(avgArray([1,2,3])).to.deep.equal(2);
    });
  });
});