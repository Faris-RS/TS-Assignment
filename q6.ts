// Using the ‘switch case’ write a program to accept an input number from the user and output the day. Eg: 1 is Sunday, 2 is Monday etc.

import * as readline from "readline";

const consoleInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function findDay() {
  consoleInput.question("Enter a day number: ", (input) => {
    switch (parseFloat(input)) {
      case 1:
        console.log("It is Sunday");
        break;
      case 2:
        console.log("It is Monday");
        break;
      case 3:
        console.log("It is Tuesday");
        break;
      case 4:
        console.log("It is Wednesday");
        break;
      case 5:
        console.log("It is Thursday");
        break;
      case 6:
        console.log("It is Friday");
        break;
      case 7:
        console.log("It is Saturday");
        break;
      default:
        console.log("Please enter a valid day");
    }
    consoleInput.close();
  });
}

findDay();
