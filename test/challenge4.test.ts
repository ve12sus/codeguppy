// print all the multiplication tables with numbers from 1 to 10

import { expect } from 'chai'
import { multiplyTable } from '../src/challenge4'

describe('print all the multiplication tables with numbers from 1 to 10', function() {
  describe('#multiplyTable()', function() {
    it('should print all the multiplication tables with numbers from 1 to 10', function() {
      expect(multiplyTable(10).length).to.deep.equal(121);
    });
  });
});
