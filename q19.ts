// Income tax is calculated as per the following
// Upto 2.5L no tax, between 2.5 & 5 5%, 5 & 10 20%, above 30%

import * as readline from "readline";

const consoleInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calculateIncomeTax() {
  let income: number;
  let tax: number;
  consoleInput.question("Enter the annual income: ", (value) => {
    income = parseFloat(value);
    if (income <= 250000) tax = 0;
    if (income > 250000 && income <= 500000) tax = 5;
    if (income > 500000 && income <= 1000000) tax = 20;
    if (income > 1000000) tax = 30;
    const amount: number = (income * tax) / 100;
    console.log(`Income tax amount: ${amount}`);
    consoleInput.close();
  });
}
calculateIncomeTax();
