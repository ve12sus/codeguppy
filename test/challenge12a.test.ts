// Create a function that receives an array of numbers and returns an array 
// containing only the positive numbers.
// Requirement: Use a “for” loop

import { expect } from 'chai'
import { getPositives } from '../src/challenge12a'

describe('receives an array of numbers and returns an array containing only the positive numbers', function() {
  describe('#getPositives()', function() {
    it('should return an array containing only the positive numbers', function() {
      expect(getPositives([-1,2,-3])).to.deep.equal([2]);
    });
  });
});
