// Write a program to multiply the adjacent values of an array and store it in an another array

import * as readline from "readline";

const consoleInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function multiplyAdjacent() {
  let arr: number[] = [];
  consoleInput.question(
    "Enter values of array seperated by comma: ",
    (input) => {
      const values = input.split(",").map((val) => parseInt(val.trim()));
      for (let i = 0; i < values.length - 1; i++) {
        const multiple = values[i] * values[i + 1];
        arr.push(multiple);
      }
      console.log(arr);

      consoleInput.close();
    }
  );
}
multiplyAdjacent();
