// Day 2, Question 1
const optCodeComputer = (input) => {
  return (function recurse(input, marker) {
    const [operation, inputALoc, inputBLoc, outputLoc] = input.slice(marker, marker + 4);

    switch (operation) {
      case 1:
        input[outputLoc] = input[inputALoc] + input[inputBLoc];
        return recurse(input, marker + 4);
      case 2:
        input[outputLoc] = input[inputALoc] * input[inputBLoc];
        return recurse(input, marker + 4);
      case 99:
        return input;
      default:
        throw new Error(`Unknown operation ${operation}`);
    }
  })(input, 0);
};

module.exports = {
  optCodeComputer,
};
