// Return an array the first "nPrimes" prime numbers greater than a number "startAt"

import { expect } from 'chai'
import { getPrimes } from '../src/challenge19'

describe('Print the first 100 prime numbers', function() {
  describe('#getPrimes()', function() {
    it('should print the first 100 prime numbers', function() {
      expect(getPrimes(4, 3)).to.deep.equal([3,5,7,11]);
    });
  });
});