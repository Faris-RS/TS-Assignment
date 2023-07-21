// Write a program to add the values of two 2D arrays using functions

import * as readline from "readline";

const consoleInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getArray(size: number): Promise<number[][]> {
  return new Promise((resolve) => {
    console.log(`Enter the values of array (${size}x${size}) tab seperated:`);
    const array: number[][] = [];

    function readRow(row: number) {
      consoleInput.question(`Row ${row + 1}: `, (input) => {
        const values = input.split("\t").map((val) => parseInt(val.trim(), 10));
        if (values.length !== size || values.some((val) => isNaN(val))) {
          console.log(
            `Invalid input for Row ${
              row + 1
            }. Please enter ${size} tab-separated numbers.`
          );
          consoleInput.close();
          process.exit(1);
        }
        array.push(values);
        if (row + 1 < size) {
          readRow(row + 1);
        } else {
          resolve(array);
        }
      });
    }

    readRow(0);
  });
}

function addArray(array1: number[][], array2: number[][]): number[][] {
  const sum: number[][] = [];
  for (let i = 0; i < array1.length; i++) {
    sum.push([]);
    for (let j = 0; j < array1[i].length; j++) {
      sum[i].push(array1[i][j] + array2[i][j]);
    }
  }
  return sum;
}

function displayArray(array: number[][]): void {
  console.log("Sum of array 1 and array 2:");
  for (const row of array) {
    console.log(row.join("\t"));
  }
}

async function main() {
  consoleInput.question("Enter the size of array: ", async (sizeInput) => {
    const size = parseInt(sizeInput);
    if (isNaN(size) || size <= 0) {
      console.log("Invalid size. Please enter a valid positive number.");
      consoleInput.close();
      return;
    }

    const array1 = await getArray(size);
    const array2 = await getArray(size);

    const sum = addArray(array1, array2);

    displayArray(sum);
    consoleInput.close();
  });
}

main();
