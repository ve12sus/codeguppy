// Create a function to convert a CSV text to a “bi-dimensional” array

import { expect } from 'chai'
import { csvToArray } from '../src/challenge35'

const data = 'John;Smith;954-000-0000\n' +
              'Mitch;Tiger;305-000-0000\n' +
              'Monique;Vasquez;103-000-0000';

describe('Will convert a CSV text to a “bi-dimensional” array', function() {
  describe('#csvToArray()', function() {
    it('should convert a CSV text to a “bi-dimensional” array', function() {
      expect(csvToArray(data)).to.deep.equal([]);
    });
  });
});
