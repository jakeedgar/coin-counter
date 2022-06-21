// Variables
quarter = 0;
dime = 0;
nickel = 0;
penny = 0;


// Functions
const numify = (input) => {
  let stringInput = input.toString();
  let cleanInput = stringInput.replaceAll('.', '');
  let numInput = parseInt(cleanInput);
  input = numInput;
  return input;
}

const counter = (input) => {
  if (input > 0){
    if (input >= 25 ) {
      quarter ++;
      input -= 25;
    } else if (input >= 10) {
      dime ++;
      input -= 10;
    } else if (input >= 5) {
      nickel ++;
      input -= 5;
    } else if (input <= 4) {
      penny ++;
      input -= 1;
    } else {
      return;
    }
      return counter(input);
  } else {
    return "Change Break Down:" + "quarters: " + quarter + " dimes: " + dime + " nickels: " + nickel + " pennies: " + penny;
  }
}