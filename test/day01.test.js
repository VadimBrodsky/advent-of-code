const { assert } = require('chai');
const { fuelRequired, fuelRequiredWithFuelMass } = require('../src/day01.js');
const input = require('./input/day01-input.js');

module.exports = {
  question1_samples() {
    assert.equal(fuelRequired(12), 2);
    assert.equal(fuelRequired(14), 2);
    assert.equal(fuelRequired(1969), 654);
    assert.equal(fuelRequired(100756), 33583);
  },

  question1_answer() {
    const answer = input.reduce((acc, i) => acc + fuelRequired(i), 0);
    assert.equal(answer, 3226488);
  },

  question2_samples() {
    assert.equal(fuelRequiredWithFuelMass(14), 2);
    assert.equal(fuelRequiredWithFuelMass(1969), 966);
    assert.equal(fuelRequiredWithFuelMass(100756), 50346);
  },

  question2_answer() {
    const answer = input.reduce((acc, i) => acc + fuelRequiredWithFuelMass(i), 0);
    assert.equal(answer, 4836845);
  },
};
