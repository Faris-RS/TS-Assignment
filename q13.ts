// Write a program to identify whether a string is a palindrome or not

import * as readline from "readline";

const consoleInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function checkPalindrome() {
  consoleInput.question("Enter a string: ", (input) => {
    const str: string = input.trim().toUpperCase();
    const reversedStr: string = str.split("").reverse().join("");
    if (str === reversedStr) {
      console.log("Entered string is a palindrome");
    } else {
      console.log("Entered string is not a palindrome");
    }
    consoleInput.close();
  });
}

checkPalindrome();
