const { equal } = require('assert');
const { fuelRequired, fuelRequiredWithFuelMass } = require('./day1.js');
const input = require('./input.js');

module.exports = {
  question1_samples() {
    equal(fuelRequired(12), 2);
    equal(fuelRequired(14), 2);
    equal(fuelRequired(1969), 654);
    equal(fuelRequired(100756), 33583);
  },

  question1_answer() {
    const answer = input.reduce((acc, i) => acc + fuelRequired(i), 0);
    equal(answer, 3226488);
  },

  question2_samples() {
    equal(fuelRequiredWithFuelMass(14), 2);
    equal(fuelRequiredWithFuelMass(1969), 966);
    equal(fuelRequiredWithFuelMass(100756), 50346);
  },

  question2_answer() {
    const answer = input.reduce((acc, i) => acc + fuelRequiredWithFuelMass(i), 0);
    equal(answer, 4836845);
  },
};
