//  Print the distance between the first 100 prime numbers

import { expect } from 'chai'
import { primeDistances } from '../src/challenge29'

describe('Print the distance between the first 100 prime numbers', function() {
  describe('#primeDistances()', function() {
    it('should print the distance between the first 100 prime numbers', function() {
      expect(primeDistances(9)).to.deep.equal([1,2,2,4,2,4,2,4]);
    });
  });
});