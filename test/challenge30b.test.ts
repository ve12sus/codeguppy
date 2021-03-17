// Create a function that will add two indefinite size numbers.
// Requirements: Only positive numbers will be used and will be provided to
// the function as strings. The result should be also returned as a string

import { expect } from 'chai'
import { add } from '../src/challenge30b'

const n1 = '2909034221912398942349';
const n2 = '129092390909309499';

describe('Add two indefinite size numbers', function() {
  describe('#add()', function() {
    it('should add two indefinite size numbers', function() {
      expect(add(n1, n2)).to.deep.equal('2909163314303308251848');
    });
  });
});