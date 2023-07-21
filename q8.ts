// Write a program to find the sum of all the odd numbers for a given limit. For example if the input limit is 10 then the result is 1+3+5+7+9 = 25

import * as readline from "readline";

const consoleInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function oddSumTillLimit() {
  let limit: number;
  let sum: number = 0;
  consoleInput.question("Enter a limit: ", (input) => {
    limit = parseFloat(input);
    for (let i = 1; i <= limit; i++) {
      if (i % 2 === 1) sum += i;
    }
    console.log(`Sum of odd numbers till ${limit} is ${sum}`);

    consoleInput.close();
  });
}
oddSumTillLimit();
