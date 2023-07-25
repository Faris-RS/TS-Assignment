// Program to calculate area of either a circle, square, rectangle or triangle depending upon user input

import * as readline from "readline";

class Area {
  circle(radius: number): number {
    return Math.PI * radius * radius;
  }

  square(side: number): number {
    return side * side;
  }

  rectangle(length: number, width: number): number {
    return length * width;
  }

  triangle(base: number, height: number): number {
    return (base * height) / 2;
  }
}

class MyClass extends Area {
  private rl: readline.Interface;

  constructor() {
    super();
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  async main() {
    console.log("Enter your choice:");
    console.log("1. Circle");
    console.log("2. Square");
    console.log("3. Rectangle");
    console.log("4. Triangle");
    const choice = await this.getInput();

    switch (choice) {
      case "1":
        const radius = parseFloat(await this.getInput("Enter the radius: "));
        const circleArea = this.circle(radius);
        console.log(`Area of the circle is: ${circleArea.toFixed(2)}`);
        break;

      case "2":
        const side = parseFloat(
          await this.getInput("Enter the length of a side: ")
        );
        const squareArea = this.square(side);
        console.log(`Area of the square is: ${squareArea.toFixed(2)}`);
        break;

      case "3":
        const length = parseFloat(await this.getInput("Enter the length: "));
        const width = parseFloat(await this.getInput("Enter the width: "));
        const rectangleArea = this.rectangle(length, width);
        console.log(`Area of the rectangle is: ${rectangleArea.toFixed(2)}`);
        break;

      case "4":
        const base = parseFloat(await this.getInput("Enter the base: "));
        const height = parseFloat(await this.getInput("Enter the height: "));
        const triangleArea = this.triangle(base, height);
        console.log(`Area of the triangle is: ${triangleArea.toFixed(2)}`);
        break;

      default:
        console.log("Invalid choice.");
    }

    this.rl.close();
  }

  private getInput(promptText?: string): Promise<string> {
    return new Promise((resolve) => {
      if (promptText) {
        this.rl.question(promptText, (input) => resolve(input.trim()));
      } else {
        this.rl.on("line", (input) => {
          resolve(input.trim());
        });
      }
    });
  }
}

const myClass = new MyClass();
myClass.main();
