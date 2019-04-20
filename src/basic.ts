// OOP in TypeScript

class Greeter {
  public greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }
  public greet(): string {
    return `Hello, ${this.greeting}.`;
  }
}

let greeter = new Greeter("welcome to TypeScript OOP");

console.log(greeter.greet());
