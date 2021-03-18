// Implement the Caesar cypher

import { expect } from 'chai'
import { encrypt, decrypt } from '../src/challenge39'

const text = 'I LOVE JAVASCRIPT';
const textEnc = encrypt(text, 13);

describe('Will Implement the Caesar cypher', function() {
  describe('#encrypt()', function() {
    it('should Implement the Caesar cypher', function() {
      expect(decrypt(textEnc, 13)).to.deep.equal('I LOVE JAVASCRIPT');
    });
  });
});
