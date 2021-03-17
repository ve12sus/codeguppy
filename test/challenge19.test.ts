// Return an array the first "nPrimes" prime numbers greater than a number "startAt"

import { expect } from 'chai'
import { getPrimes } from '../src/challenge19'

describe('Return an array "nPrimes" prime numbers greater than "startAt"', function() {
  describe('#getPrimes()', function() {
    it('should return an array "nPrimes" prime numbers greater than "startAt"', function() {
      expect(getPrimes(4, 3)).to.deep.equal([3,5,7,11]);
    });
  });
});
