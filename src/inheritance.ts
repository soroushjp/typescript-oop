// OOP inheritance in TypeScript

class Animal {
  private location = 0;

  // For a superclass:
  // * We can use "private" modifier to prevent any instances of it being
  //   created, e.g. to use a Singleton pattern:
  //   tslint:disable-next-line
  //   https://stackoverflow.com/questions/51134172/what-is-the-usage-of-private-and-protected-constructors-in-typescript
  // * We can use a "protected" modifier if we want to allow subclasses but not
  //   any superclass instances.
  constructor(readonly isAnimal: boolean = true) {
  }

  public move(distance: number = 0) {
    this.location += distance;
  }

  public currentLocation() {
    return this.location;
  }

  public speak() {
    return "Animal noise!";
  }
}

class Dog extends Animal {
  constructor() {
    // If a subclass declares a constructor, it *must* call super (the
    // constructor of the superclass) and must do so before using any member
    // properties.
    super();
  }

  // overrides superclass Animal method
  public speak() {
    return "woof";
  }
}

const animal = new Animal();

console.log(`animal.isAnimal: ${animal.isAnimal}`);
console.log(`animal.speak(): ${animal.speak()}`);
console.log(`animal.location(): ${animal.currentLocation()}`);
animal.move(5);
console.log(`animal.location() after animal.move(5): ${animal.currentLocation()}`);

console.log("");
const dog = new Dog();

console.log(`dog.isAnimal: ${ dog.isAnimal }`);
console.log(`dog.speak(): ${dog.speak()}`);
console.log(`dog.location(): ${dog.currentLocation()}`);
dog.move(5);
console.log(`dog.location() after dog.move(5): ${dog.currentLocation()}`);
