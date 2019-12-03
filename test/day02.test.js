const { assert } = require('chai');
const { optCodeComputer } = require('../src/day02.js');
const input = require('./input/day02-input.js');

module.exports = {
  day02_part1_samples() {
    assert.deepEqual(optCodeComputer([1, 0, 0, 0, 99]), [2, 0, 0, 0, 99]);
    assert.deepEqual(optCodeComputer([2, 3, 0, 3, 99]), [2, 3, 0, 6, 99]);
    assert.deepEqual(optCodeComputer([2, 4, 4, 5, 99, 0]), [2, 4, 4, 5, 99, 9801]);
    assert.deepEqual(optCodeComputer([1, 1, 1, 4, 99, 5, 6, 0, 99]), [30, 1, 1, 4, 2, 5, 6, 0, 99]);
  },

  day02_part1_answer() {
    input[1] = 12;
    input[2] = 2;
    assert.equal(optCodeComputer(input)[0], 5098658);
  },
};
