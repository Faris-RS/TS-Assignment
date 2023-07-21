// Write a program to sort an array from user in descending order

import * as readline from "readline";

const consoleInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function descendingSort() {
  consoleInput.question(
    "Enter values of array seperated by comma: ",
    (input) => {
      const array = input.split(",").map((val) => parseInt(val.trim()));
      for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < i; j++) {
          if (array[i] > array[j]) {
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
          }
        }
      }
      console.log(`Array after sorting in descending order is ${array}`);
      consoleInput.close();
    }
  );
}
descendingSort();
