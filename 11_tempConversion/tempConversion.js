const convertToCelsius = function(fahr) {
  const celcius = (fahr - 32) * (5 / 9);
  return Math.round(celcius * 10) / 10;
};

const convertToFahrenheit = function(celc) {
  const fahr = (celc * (9 / 5)) + 32;
  return Math.round(fahr * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
