// Create a function that will capitalize the first letter of each word in a
// text

import { expect } from 'chai'
import { capitalizeWords } from '../src/challenge32'

describe('Capitalize the first letter of each word in a text', function() {
  describe('#capitalizeWords()', function() {
    it('should capitalize the first letter of each word in a text', function() {
      expect(capitalizeWords('JavaScript is cool')).to.deep.equal('JavaScript Is Cool');
    });
  });
});

