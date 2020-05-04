let apples = 5;
let speed: string = "fast";
let hasName: boolean = true;
let nothingMuch: null = null;
// apples = '123' //wrong will not work even apples doesnt have type annotation

//built in objects
let now: Date = new Date();

//Array
let colors: string[] = ["red", "green", "blue"];

let myNumbers: number[] = [1, 2, 3];

let truths: boolean[] = [true, true, false];

//Classes

class X {}

let x: X = new X();

//object literal

let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

//function

const longNumber: (i: number) => void = i => {
  console.log(i);
};

//when to use annotations
// 1 function taht returns that any type
//not good because JSON return any type
const json = '{"x":10,"y":20}';
const coordinates = JSON.parse(json);
console.log(coordinates);
//good with type annotation
const coordinates1: { x: number; y: number } = JSON.parse(json);
//2 when we declare a variable on one line and initailizate it later

let words = ["red", "green", "blue"];
let foundWord = false;
for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}
//3 variable whoes type cannot be infered correctly
let numbers = [-10, -1, 12];
let nubmerAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    nubmerAboveZero = numbers[i];
  }
}
