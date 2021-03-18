//  will receive n as argument and return an array of n random numbers from 1 to n

import { expect } from 'chai'
import { getRandomNumbers } from '../src/challenge50'

describe('Will receive n as argument and return an array of n random numbers from 1 to n', function() {
  describe('#getRandomNumbers()', function() {
    it('should receive n as argument and return an array of n random numbers from 1 to n', function() {
      expect(getRandomNumbers(10).length).to.deep.equal(10);
    });
  });
});
