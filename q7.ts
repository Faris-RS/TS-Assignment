// Write a program to print the multiplication table of given numbers till 10.

import * as readline from "readline";

const consoleInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function multiplicationTable() {
  let input: number;
  consoleInput.question("Enter a number: ", (value) => {
    input = parseFloat(value);
    for (let i = 1; i <= 10; i++) {
      console.log(`${i} * ${input} = ${i * input}`);
    }
    consoleInput.close();
  });
}

multiplicationTable()
