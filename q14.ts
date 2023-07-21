// Write a program to add to two dimensional arrays

import * as readline from "readline";

const consoleInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function read2DArray(size: number): Promise<number[][]> {
  return new Promise((resolve) => {
    console.log(`Enter the values of array (${size}x${size}) space seperated:`);
    const array: number[][] = [];

    function readRow(row: number) {
      consoleInput.question(`Row ${row + 1}: `, (input) => {
        const values = input.split(" ").map((val) => parseInt(val.trim(), 10));
        if (values.length !== size || values.some((val) => isNaN(val))) {
          console.log(
            `Invalid input for Row ${
              row + 1
            }. Please enter ${size} space-separated numbers.`
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

function add2DArrays(array1: number[][], array2: number[][]): number[][] {
  const sum: number[][] = [];
  for (let i = 0; i < array1.length; i++) {
    sum.push([]);
    for (let j = 0; j < array1[i].length; j++) {
      sum[i].push(array1[i][j] + array2[i][j]);
    }
  }
  return sum;
}

async function performArrayAddition() {
  consoleInput.question("Enter the size of arrays: ", async (sizeInput) => {
    const size = parseInt(sizeInput);
    if (isNaN(size) || size <= 0) {
      console.log("Invalid size. Please enter a valid positive number.");
      consoleInput.close();
      return;
    }

    const array1 = await read2DArray(size);
    const array2 = await read2DArray(size);

    const sum = add2DArrays(array1, array2);

    console.log("Sum of 2 arrays is:");
    for (const row of sum) {
      console.log(row.join(" "));
    }

    consoleInput.close();
  });
}

performArrayAddition();
