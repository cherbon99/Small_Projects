function convertToFahrenheit(celsius) {
  const mult = 1.8;
  const add = 32;

  const farenhiet = celsius * mult + add;

  console.log(farenhiet);
}

const cTemp = prompt("enter temp in celcius:");
convertToFahrenheit(cTemp);
