// Accept a char input from the user and display it on the console.

import * as readline from 'readline';

// Create a readline interface to read input from the console
const consoleInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Prompt the user for input
consoleInput.question('Please enter a character: ', (userInput: string) => {
  // Display the input back to the console
  console.log(`You entered: ${userInput}`);
  consoleInput.close();
});
