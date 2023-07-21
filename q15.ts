// Write a program to accept an array and display it on the console using functions

import * as readline from "readline";

const consoleInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getArray(size: number): Promise<number[]> {
  return new Promise((resolve) => {
    consoleInput.question(
      `Enter ${size} comma-separated numbers: `,
      (input) => {
        const values = input.split(",").map((val) => parseInt(val.trim()));
        if (values.length !== size || values.some((val) => isNaN(val))) {
          console.log(
            `Invalid input. Please enter ${size} comma-separated numbers.`
          );
          consoleInput.close();
          process.exit(1);
        }
        resolve(values);
      }
    );
  });
}

function displayArray(array: number[]): void {
  console.log("Array values:");
  console.log(array.join(", "));
}

function main() {
  let size: number;
  consoleInput.question("Enter the size of array: ", async (value) => {
    size = Math.floor(parseFloat(value));
    const array: number[] = await getArray(size);
    displayArray(array);
    consoleInput.close();
  });
}

main();
