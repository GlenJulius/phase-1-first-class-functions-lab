// Code your solution in this file!
// Returns the first two drivers from the array
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

// Returns the last two drivers from the array
const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

// Array containing the two driver selection functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Higher-order function that returns a fare multiplier function
function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
}

// Doubles the fare
const fareDoubler = createFareMultiplier(2);

// Triples the fare
const fareTripler = createFareMultiplier(3);

// Selects different drivers based on the function passed in
function selectDifferentDrivers(drivers, driverSelector) {
  return driverSelector(drivers);
}