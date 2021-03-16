// Calculate the sum of digits of a positive integer number

import { expect } from 'chai'
import { sumDigits } from '../src/challenge17'

describe('Calculate the sum of digits of a positive integer number', function() {
  describe('#sumDigits()', function() {
    it('should calculate the sum of digits of a positive integer number', function() {
      expect(sumDigits(11)).to.deep.equal(2);
    });
  });
});