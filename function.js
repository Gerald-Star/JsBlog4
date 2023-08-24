//REDUCE METHOD
//Reduce takes list of Transformation objects
//array.reduce(function(accumulator, currentValue, currentIndex, arr)initialValue){
//accumulator- Required-results of reduction so far,
//currentValue - Required - Current value of index
//currentValue, currentIndex, arr - optional
//}
var examScore2 = [5, 3, 7, 8, 9];
examScore2.reduce(function (acc, curr, idx, arr) {
  return acc + curr;
}, 3);
console.log(examScore2);

var multArr = [
  [0, 1],
  [2, 3],
  [4, 5],
];
var multReduce = multArr.reduce(function (acc, curr, idx, arr) {
  return acc.concat(curr);
}, []);
console.log(multReduce);

//challenge 2
var homeruns = [{ batter: 12 }, { batter: 13 }, { batter: 22 }, { batter: 21 }];
var totalHomes = homeruns.reduce(function (a, b) {
  console.log("accumulated ", a, "current ", b);
  return a + b.batter;
}, 0);

console.log(totalHomes);

//array challenge,
//create an array of 5 elements
//find the sum, product and largest value

var numbers = [5, 10, 25, 20, 25];
var numReduce = numbers.reduce(function (x, y) {
  console.log(x, y);
  return x + y; // you can multiply
});

console.log(numReduce);

var numbers1 = [10, 5, 20, 25, 15];
var largeNum = numbers1.reduce(function (acc, curr) {
  if (acc > curr) {
    return acc;
  } else {
    return curr;
  }
});
console.log(largeNum);

//Challenge
//use map method on all elements of an array
//use reduce method to return single value of new array
//CHALLENGE- CHAIN METHOD

var numbers2 = [1, 2, 3, 4];
var triples = numbers
  .map(function (number) {
    return number * 3;
  })
  .reduce(function (a, b) {
    return a + b;
  }, 0);

console.log(triples);

//ES LET statement
//let utilizes block scope while var only utilizes function scope
//create identical set of code and show var var can be ock on function scope and let on block scope

var a = 4;
if (true) {
  var b = 5;
}
console.log(a * b);

//create identical set between let
function varTest() {
  var x = 1;
  if (true) {
    var x = 2;
    console.log(x);
  }
  console.log(x);
}
varTest();

// with let
function letTest() {
  let x = 1;
  if (true) {
    let x = 2;
    console.log(x);
  }
  console.log(x);
}
letTest();
//TEMPLATE LITERALS
var sentence = "I am happy to get a new job now";
console.log(sentence);
//using template literal
var sentence1 = `I am happy to get a new job now`;
console.log(sentence1);

var topping1 = "pepper";
var topping2 = "onions";
var pizzaToppings = `My fav pizza has ${topping1} and ${topping2}`;
console.log(pizzaToppings);

// let pizza = {
//   add1: "onions",
//   add2: "pepper",
//   favPizza: function () {
//     return `My fav pizza should have ${add1} and ${add2}`;
//   }
// };
// pizza.favPizza();
// console.log(pizza.favPizza());

//challenge
let string = `I'm sick", John said`;
console.log(string);

//challenge
var food = "coffee";
var drink = "tea";
var time = "morning";

let dailyRoutines = `Mark said, he wakes up every ${time} to take his ${food} and ${drink} before starting his day `;
console.log(dailyRoutines);


//ARROW FUNCTIONS
let func3 = () => {
  return 'Hi';
}


console.log(func3())

//write an arrow function with two or more parameters
let es6name = () => 'john';
console.log(es6name());

let es6new = (a, b) => a * b;
var a = 5;
var b = 6;

es6new(a, b)
console.log(es6new(a, b));

//challenge
var numArrays = [2, 4, 6];
var sumArrays = numArrays.map(function (n) {
  return n * n;
});

console.log(sumArrays);

// Redo with arrow function

var numArrays1 = [2, 4, 6];
var sumArrays1 = numArrays1.map(n => n * n);

console.log(sumArrays1)


//SPREAD OPERATORS has three dots ...
//Examples#
var alpha = ['a', 'b', 'c'];
var omega = ['d', 'e', 'f'];

//using concat to join both arrays together
var concat = alpha.concat(omega);
console.log(concat) // joins both arrays together

//Now use the spread operator to make this to be very simple
let alpha1 = ['a', 'b', 'c'];
let omega1 = ['d', 'e', 'f'];
let spreadOperator = ['a', 'b', 'c', ...omega1];
console.log(spreadOperator);

// spread operators in functions

let first = [1, 2, 3];
let second = [2, 4, 5];

function productThree(w, x, z) {
  let result = w * x * z;
  console.log(result);
}

// product(a, b, c);
console.log(productThree(...first))
console.log(productThree(...second))

//Challenge
let es6color = ['brown', 'cyan', 'white'];
let es7Color = ['black', 'yellow', 'green'];

let es6Rainbow = ['brown', 'cyan', 'white', ...es7Color];
console.log(es6Rainbow);

//spread operator
//create a function that will take 3 parameters
//pass to the function an array with 3 elements using the spread operator
//pass those arguments to a template string and return the template string

let array = ['rain', 'bathroom', 'quickly'];

function madLib(verb, noun, adjective) {
  return `I ${verb} to the ${noun} and ${adjective} sat down.`
}

madLib(...array)
console.log(madLib(...array));