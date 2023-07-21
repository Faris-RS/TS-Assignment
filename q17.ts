import * as readline from "readline";

const consoleInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Calculator {
  addition(a: number, b: number): number {
    return a + b;
  }
  subtraction(a: number, b: number): number {
    return a - b;
  }
  multiplication(a: number, b: number): number {
    return a * b;
  }
  division(a: number, b: number): number {
    if (b === 0) {
      throw new Error("Division by zero is not allowed!");
    }
    return a / b;
  }
}

function getMenuChoice(): Promise<number> {
  return new Promise((resolve) => {
    console.log("Menu:");
    console.log("1. Addition");
    console.log("2. Subtraction");
    console.log("3. Multiplication");
    console.log("4. Division");
    consoleInput.question("Enter your choice (1/2/3/4): ", (input) => {
      const choice = parseInt(input.trim(), 10);
      if (isNaN(choice) || choice < 1 || choice > 4) {
        console.log("Invalid choice. Please enter a valid number (1/2/3/4).");
        consoleInput.close();
      }
      resolve(choice);
    });
  });
}

async function performOperation() {
  const calculator = new Calculator();
  const choice = await getMenuChoice();

  consoleInput.question("Enter the first number: ", (num1Input) => {
    const num1 = parseFloat(num1Input.trim());
    if (isNaN(num1)) {
      console.log("Invalid input for the first number.");
      consoleInput.close();
      process.exit(1);
    }
    consoleInput.question("Enter the second number: ", (num2Input) => {
      const num2 = parseFloat(num2Input.trim());
      if (isNaN(num2)) {
        console.log("Invalid input for the second number.");
        consoleInput.close();
        process.exit(1);
      }

      let result: number;
      switch (choice) {
        case 1:
          result = calculator.addition(num1, num2);
          break;
        case 2:
          result = calculator.subtraction(num1, num2);
          break;
        case 3:
          result = calculator.multiplication(num1, num2);
          break;
        case 4:
          try {
            result = calculator.division(num1, num2);
          } catch (error) {
            console.log(error.message);
            consoleInput.close();
            return;
          }
          break;
        default:
          console.log("Invalid choice.");
          consoleInput.close();
          return;
      }

      console.log("Result:", result);
      consoleInput.close();
    });
  });
}

performOperation();
