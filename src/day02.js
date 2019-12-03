// Day 2, Part 1
const optCodeComputer = (input) => {
  return (function recurse(input, instructionPointer) {
    const INSTRUCTION_LENGTH = 4;

    const [instruction, param0Address, param1Address, outputLoc] = input.slice(
      instructionPointer,
      instructionPointer + INSTRUCTION_LENGTH,
    );

    switch (instruction) {
      case 1:
        input[outputLoc] = input[param0Address] + input[param1Address];
        return recurse(input, instructionPointer + INSTRUCTION_LENGTH);
      case 2:
        input[outputLoc] = input[param0Address] * input[param1Address];
        return recurse(input, instructionPointer + INSTRUCTION_LENGTH);
      case 99:
        return input;
      default:
        throw new Error(`Unknown instruction ${instruction}`);
    }
  })(input, 0);
};

// Day 2, Part 2
const calcOptCodeOutput = (noun, verb, instructions) => {
  const [instruction, , , ...tail] = instructions;
  return optCodeComputer([instruction, noun, verb, ...tail])[0];
};

const nounAndVerbFinder = ({ input, desiredOutput, minValue = 0, maxValue = 99 }) => {
  // brute force approach
  for (let noun = minValue; noun < maxValue; noun++) {
    for (let verb = minValue; verb < maxValue; verb++) {
      try {
        if (calcOptCodeOutput(noun, verb, input) === desiredOutput) {
          return [noun, verb];
        }
      } catch (e) {
        continue;
      }
    }
  }

  return [-1, -1];
};

module.exports = {
  optCodeComputer,
  nounAndVerbFinder,
};
