// Write a program to check whether a given number is prime or not

import * as readline from "readline";

const consoleInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function checkPrime() {
  let num: number;
  consoleInput.question("Enter a number: ", (value) => {
    num = parseFloat(value);
    let count: number = 0;
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) count++;
    }
    if (count === 2) console.log("Entered number is a prime number");
    else console.log("Entered number is a composite number");
    consoleInput.close();
  });
}
checkPrime();
