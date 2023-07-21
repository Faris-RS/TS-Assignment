// Accept two inputs from the user and output their sum.

import * as readline from "readline";

const consoleInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calculateSum() {
  let firstNumber: number;
  let secondNumber: number;
  let sum: number;

  consoleInput.question("Enter the first number: ", (input1) => {
    firstNumber = parseFloat(input1);

    consoleInput.question("Enter the second number: ", (input2) => {
      secondNumber = parseFloat(input2);
      sum = firstNumber + secondNumber;
      console.log(`The sum of ${firstNumber} and ${secondNumber} is: ${sum}`);
      consoleInput.close();
    });
  });
}

calculateSum();
