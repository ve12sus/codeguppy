// create a function that will convert from Fahrenheit to Celsius
// Reminder: C = F - 32 / 1.8

import { expect } from 'chai'
import { fahrenheitToCelsius } from '../src/challenge9'

describe('convert from Fahrenheit to Celsius', function() {
  describe('#fahrenheitToCelsius()', function() {
    it('should convert from Fahrenheit to Celsius', function() {
      expect(fahrenheitToCelsius(68)).to.deep.equal(20);
    });
  });
});
