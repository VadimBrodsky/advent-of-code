// Day 1, Question 1
const fuelRequired = (mass) => {
  return Math.floor(mass / 3) - 2;
};

// Day 1, Question 2
const fuelRequiredWithFuelMass = (mass) => {
  const fuel = Math.floor(mass / 3) - 2;

  if (fuel <= 0) {
    return 0;
  }

  return fuel + fuelRequiredWithFuelMass(fuel);
};

module.exports = {
  fuelRequired,
  fuelRequiredWithFuelMass,
}
