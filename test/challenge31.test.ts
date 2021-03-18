// Create a function that will return the number of words in a text

import { expect } from 'chai'
import { countWords } from '../src/challenge31'

describe('Return the number of words in a text', function() {
  describe('#countWords()', function() {
    it('should return the number of words in a text', function() {
      expect(countWords('JavaScript is cool')).to.deep.equal(3);
    });
  });
});
