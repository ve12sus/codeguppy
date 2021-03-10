import { expect } from 'chai';
import { printNumbers } from '../src/challenge1';

const list : number[] = [1,2,3,4, 5,6,7,8,9,10];

describe('Print numbers from 1-10', function() {
  describe('#printNumbers()', function() {
    it('should return a array with the numbers 1-10', function() {
      expect(printNumbers()).to.deep.equal(list);
    });
  });
});



