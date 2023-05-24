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

/* Question 4: Check all values in an array
Write a function called all which accepts an array and a callback and returns true if 
every value in the array returns true when passed as parameter to the callback function */

/* Question 5: Product of an array
Write a function called productOfArray which takes in an array of numbers and returns the 
product of them all */

function productOfArray(arr) {
  // base case
  if (arr.length === 0) {
    return 1;
  }

  // recursive case
  return arr.shift() * productOfArray(arr);
}

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

var obj = {
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

var val = "foo2";

/* Question 7: Parse a multi-dimensional array
Given a multi-dimensional integer array, return the total number of integers
stored inside this array */

function totalIntegers(arr, count = 0) {
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      count = totalIntegers(item, count);
    } else if (Number.isInteger(item)) {
      count++;
    }
  });

  return count;
}

totalIntegers([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]]); // 7
