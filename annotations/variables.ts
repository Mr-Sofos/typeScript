let oranges: number = 5;
let speed: string = 'fast';
let hasDog: boolean = false;

let nothing: null = null;
let nothingTwo: undefined = undefined;

// build-in objects
let now: Date = new Date();

// array
// let colors: string[] = ['red', 'green', 'blue'];
let numers: number[] = [1, 2, 3];
let results: boolean[] = [true, false, false];

// classes
// class Car {}

// let car: Car = new Car();

// object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 10,
};

// functions
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use type annotations
// 1) Function returns the 'any' type
const json = '{"x": "10", "y": "20"}';
const coordinates: { x: number; y: number } = JSON.parse(json);

// When we declare a variables on one and initialize it later
let words = ['one, two, three'];
let isTwo: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'two') {
    isTwo = true;
  }
}

// 3) Variables whoes type can't be inferred
let myNumbers = [-1, -10, 12];
let positiveNumber: boolean | number = false;

for (let i = 0; i < myNumbers.length; i++) {
  if (myNumbers[i] > 0) {
    positiveNumber = true;
  }
}
