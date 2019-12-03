// Day 2, Question 1
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

module.exports = {
  optCodeComputer,
};
