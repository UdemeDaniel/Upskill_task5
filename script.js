// Question 1
// 1 here's a function in JavaScript that converts Fahrenheit to Celsius:

function fahrenheitToCelsius(fahrenheit) {
  const celsius = (fahrenheit - 32) * 5 / 9;
  return celsius;
}

// To use this function, you simply need to pass in the temperature in Fahrenheit as an argument, like so:

console.log(fahrenheitToCelsius(68)); // Output: 20

// Question 2
// 2 here's a function in JavaScript that calculates the average of numbers in an array:
function calculateAverage(arr) {
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  const average = sum / arr.length;
  return average;
}

// To use this function, you simply need to pass in the array of numbers as an argument, like so:

const numbers = [1, 2, 3, 4, 5];
console.log(calculateAverage(numbers)); // Output: 3

// Question 3
// 3  here's a function in JavaScript that checks if a number n is divisible by two numbers x and y:

function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0;
}

// To use this function, you simply need to pass in the three numbers as arguments, like so:

console.log(isDivisible(12, 3, 4)); // Output: true
console.log(isDivisible(10, 3, 5)); // Output: false

// Question 
// 4 Create a function that will output the first 100 prime numbers.

function findPrimes(num) {
  const primes = [];
  let i = 2;
  while (primes.length < num) {
    if (isPrime(i)) {
      primes.push(i);
    }
    i++;
  }
  return primes;
}

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// To use this function, you simply need to call the findPrimes() function and pass in the number of primes you want to find, like so:

console.log(findPrimes(100)); // Output: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541]


// Question 5
// 5 Create a function that will return a boolean specifying if a number is a prime number.

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// To use this function, you simply need to call the isPrime() function and pass in the number you want to check, like so:

console.log(isPrime(7)); // Output: true
console.log(isPrime(10)); // Output: false


// Question 6
// 6 Create a function that receives an array of numbers of diverse numbers and returns an array containing only positive numbers.

function getPositiveNumbers(numbers) {
  // Create an empty array to store positive numbers
  let positiveNumbers = [];

  // Loop through the input array
  for (let i = 0; i < numbers.length; i++) {
    // Check if the current number is positive
    if (numbers[i] > 0) {
      // If it is, add it to the positiveNumbers array
      positiveNumbers.push(numbers[i]);
    }
  }

  // Return the positiveNumbers array
  return positiveNumbers;
}


// Here's an example of how you could use this function:

let numberz = [-5, 10, -3, 20, 0, -1, 15];
let positiveNumbers = getPositiveNumbers(numberz);
console.log(positiveNumbers); // Output: [10, 20, 15]

// Question 7
// 7 Write a program that prints the numbers from 1 to 100. But for multiples of 3 prints "Fizz" instead of the number and for the multiples of 5 prints "Buzz". For numbers which are multiples of both 3 and 5 prints "FizzBuzz".
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// Question 8
// 8 function that generates hashtags based on the input text:

function generateHashtag(input) {
  // Remove all spaces from the input text
  let words = input.replace(/s+/g, '').split('');

  // Capitalize the first letter of each word
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
  }

  // Combine the words into a single string and add the hash symbol
  let hashtag = "#" + words.join('');

  // Check if the hashtag is too long (more than 140 characters)
  if (hashtag.length > 140) {
    // If it is, return false
    return false;
  }

  // Otherwise, return the hashtag
  return hashtag;
}


// Test Case

let input = "hello world";
let hashtag = generateHashtag(input);
console.log(hashtag); // Output: "#HelloWorld"