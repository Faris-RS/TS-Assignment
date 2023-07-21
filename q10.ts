// Write a program to interchange the values of two arrays, ie swap array 1 values to array 2 and array 2 values to array 1

import * as readline from "readline";

const consoleInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function readArray(size: number): Promise<number[]> {
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
        }
        resolve(values);
      }
    );
  });
}

async function swapArrays() {
  consoleInput.question("Enter the size of arrays: ", async (sizeInput) => {
    const size = parseInt(sizeInput);
    if (isNaN(size) || size <= 0) {
      console.log("Invalid size. Please enter a valid positive number.");
      consoleInput.close();
    }

    let array1 = await readArray(size);
    let array2 = await readArray(size);

    console.log("Arrays before swapping:");
    console.log("Array1:", array1.join(", "));
    console.log("Array2:", array2.join(", "));
    [array1, array2] = [array2, array1];
    console.log("Arrays after swapping:");
    console.log("Array1:", array1.join(", "));
    console.log("Array2:", array2.join(", "));
    consoleInput.close();
  });
}

swapArrays();
