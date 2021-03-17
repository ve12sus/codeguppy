// create a function that will convert from Celcius to Fahrenheit
// Reminder: C = F - 32 / 1.8

import { expect } from 'chai'
import { celciusToFahrenheit } from '../src/challenge8'

describe('convert from Celcius to Fahrenheit', function() {
  describe('#celciusToFahrenheit()', function() {
    it('should convert from Celcius to Fahrenheit', function() {
      expect(celciusToFahrenheit(20)).to.deep.equal(68);
    });
  });
});
