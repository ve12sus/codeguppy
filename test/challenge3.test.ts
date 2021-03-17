// print the multiplication table with 7

import { expect } from 'chai'
import { multiplesOfSeven } from '../src/challenge3'

const list : string[] = ['7 times 0 equals 0','7 times 1 equals 7','7 times 2 equals 14',
'7 times 3 equals 21','7 times 4 equals 28','7 times 5 equals 35','7 times 6 equals 42',
'7 times 7 equals 49','7 times 8 equals 56','7 times 9 equals 63','7 times 10 equals 70'];

describe('print the multiplication table with 7', function() {
  describe('#multiplesOfSeven()', function() {
    it('should print the multiplication table with 7', function() {
      expect(multiplesOfSeven()).to.deep.equal(list);
    });
  });
});

