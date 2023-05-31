// Codingame JS Interview Prep: Recursion

/* Question 1: Sum all numbers
Write a function called sumRange. It will take a number and return the sum of all
numbers from 1 up to the number passed in. */

function sumRange(n) {
  // base case
  if (n === 1) {
    return 1;
  }

  // recursive case
  return n + sumRange(n - 1);
}

sumRange(4); // 10

/* Question 2: Power function
Write a function called power which takes in a base and an exponent. If the exponent
is 0, return 1. */

function power(b, n) {
  // base case
  if (n === 0) {
    return 1;
  }

  // recursive case
  return b * power(b, n - 1);
}

power(2, 6); // 64

/* Question 3: Calculate factorial
Write a function that returns the factorial of a number. As a quick refresher, a factorial 
of a number is the result of that number multiplied by the number before it, and 
the number before that number, and so on, until you reach 1. 
The factorial of 1 is just 1. */

function factorial(n) {
  // base case
  if (n === 1) {
    return 1;
  }

  // recursive case
  return n * factorial(n - 1);
}

factorial(5); // 120

/* Question 4: Check all values in an array
Write a function called all which accepts an array and a callback and returns true if 
every value in the array returns true when passed as parameter to the callback function */

/* Question 5: Product of an array
Write a function called productOfArray which takes in an array of numbers and returns the 
product of them all */

function productOfArray(array) {
  // base case
  if (array.length === 0) {
    return 1;
  }

  // recursive case
  return array.shift() * productOfArray(array);
}

productOfArray([1, 2, 3]); // 6

/* Question 6: Search JS object
Write a function called contains that searches for a value in a nested object. 
It returns true if the object contains that value. */

function contains(obj, val) {
  for (let key in obj) {
    // recursive case
    if (typeof obj[key] === "object") {
      return contains(obj[key], val);
    }

    // base case
    if (obj[key] === val) {
      return true;
    }
  }

  return false;
}

var nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
  },
};

contains(nestedObject, 44); // true

/* Question 7: Parse a multi-dimensional array
Given a multi-dimensional integer array, return the total number of integers
stored inside this array */

function totalIntegers(array) {
  // base case
  if (array.length === 0) return 0;

  // recursive case
  let total = 0;
  let first = array.shift();

  if (Array.isArray(first)) {
    total += totalIntegers(first);
  } else if (Number.isInteger(first)) {
    total += 1;
  }

  return total + totalIntegers(array);
}

totalIntegers([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]]); // 7

/* Question 8:
Write a function that sums squares of numbers in list that may contain more lists */

function sumSquares(array) {
  // base case
  if (array.length === 0) return 0;

  // recursive case
  let first = array.shift();

  if (Array.isArray(first)) {
    // first item is an array
    return sumSquares(first) + sumSquares(array);
  } else {
    // first item is a number
    return first ** 2 + sumSquares(array);
  }
}

sumSquares([[1, 2], 3]); // 1 + 4 + 9 = 14

/* Question 9:
The function should return an array containing repetitions of the number argument. 
For instance, replicate(3, 5) should return [5,5,5]. If the times argument is negative, 
return an empty array. */

function replicate(n, x, array = []) {
  // base case
  if (n <= 0) return array;

  // recursive case
  array.push(x);
  return replicate(n - 1, x, array);
}

replicate(3, 5); // [5, 5, 5]
