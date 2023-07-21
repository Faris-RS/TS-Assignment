// Write a program to find the simple interest.
// Program should accept 3 inputs from the user and calculate simple interest for the given inputs. Formula: SI=(P*R*n)/100)

import * as readline from "readline";

const consoleInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function findSimpleInterest() {
  let principleAmount: number;
  let interestRate: number;
  let numberOfYears: number;
  let simpleInterest: number;

  consoleInput.question("Enter principle amount: ", (input1) => {
    principleAmount = parseFloat(input1);
    consoleInput.question("Enter interest rate: ", (input2) => {
      interestRate = parseFloat(input2);
      consoleInput.question("Enter number of years: ", (input3) => {
        numberOfYears = parseFloat(input3);
        simpleInterest = (principleAmount * interestRate * numberOfYears) / 100;
        console.log(`Simple interest for given data is: ${simpleInterest}`);
        consoleInput.close();
      });
    });
  });
}
findSimpleInterest();
