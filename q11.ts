// Write a program to find the number of even numbers in an array. Program should accept an array and display the number of even numbers contained in that array

import * as readline from "readline";

const consoleInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function countEven() {
  consoleInput.question(
    "Enter values of array seperated by comma: ",
    (input) => {
      let count: number = 0;
      const values = input.split(",").map((val) => parseInt(val.trim()));
      for (let i = 0; i < values.length; i++) {
        if (values[i] % 2 === 0) count++;
      }
      console.log(`Number of even numbers in given array is ${count}`);
      consoleInput.close();
    }
  );
}
countEven();
