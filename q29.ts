// Program to return true if sum of array is even and false if sum of array is odd. Also return the sum.

import * as readline from "readline";

type Callback = (sum: number) => boolean;
function isSumEven(sum: number): boolean {
  console.log("sum is " + sum);

  return sum % 2 === 0;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function promptForArray() {
  rl.question("Enter the array elements separated by spaces: ", (input) => {
    const inputArray = input.split(" ").map(Number);
    const isEvenSum = myFilter(inputArray, isSumEven);
    console.log(
      isEvenSum ? "Sum is even, hence true" : "Sum is odd, hence false"
    );
    rl.close();
  });
}

function myFilter(array: number[], callback: Callback): boolean {
  let sum = 0;
  for (const element of array) {
    sum += element;
  }
  return callback(sum);
}

promptForArray();
