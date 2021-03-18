// Calculate the sum of numbers received in a comma delimited string

import { expect } from 'chai'
import { sumCSV } from '../src/challenge33'

describe('Calculate the sum of numbers received in a comma delimited string', function() {
  describe('#sumCSV()', function() {
    it('should calculate the sum of numbers received in a comma delimited string', function() {
      expect(sumCSV('1.5, 2.3, 5.5')).to.deep.equal(9.3);
    });
  });
});
