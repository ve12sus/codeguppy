// Create a function that will return a Boolean specifying if a number is prime

import { expect } from 'chai'
import { isPrime } from '../src/challenge16'

describe('will return a Boolean specifying if a number is prime', function() {
  describe('#getFibs()', function() {
    it('should return a Boolean specifying if a number is prime', function() {
      expect(isPrime(11)).to.deep.equal(true);
    });
  });
});