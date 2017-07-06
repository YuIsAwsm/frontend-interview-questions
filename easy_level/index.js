import { test } from 'ava';

/*
  Solutions
*/

/*
isPrime - Returns true or false, indicating whether the given number is prime.
*/

function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  if (number === 2) {
    return true;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

/*
factorial - Returns a number that is the factorial of the given number.
*/

function factorial(number) {
  return (number === 0 ? 1 : number * factorial(number - 1));
}

/*
fib - Returns the nth Fibonacci number.
*/

function fib(number) {
  let x = 0;
  let y = 1;
  for (let i = 1; i <= number; i += 1) {
    y = x + y;
    x = y - x;
  }
  return x;
}

function fibRec(number) {
  // eslint-disable-next-line no-nested-ternary
  return (number === 0 ? 0 : number === 1 ? 1 : fibRec(number - 1) + fibRec(number - 2));
}

/*
isSorted - Returns true or false, indicating whether the given array of numbers is sorted.
*/

function isSorted(list) {
  if (list.length <= 1) {
    return true;
  }
  for (let i = 1; i <= list.length; i += 1) {
    if (list[i] < list[i - 1]) {
      return false;
    }
  }
  return true;
}

/*
filter - Implement the filter function.
*/

function filter(arr, filterBy) {
  // eslint-disable-next-line
  let result = [];
  // eslint-disable-next-line
  for (let item in arr) {
    // eslint-disable-next-line
    filterBy(arr[item]) ? result.push(arr[item]) : null;
  }
  return result;
}

/*
reduce - Implement the reduce function.
*/

function reduce(arr, reduceBy, value) {
  for (let i = 0; i < arr.length; i += 1) {
    // eslint-disable-next-line
    value = reduceBy(value, arr[i], i, arr);
  }
  return value;
}

/*
reverse - Reverses the given string
*/

function reverseStr(string) {
  let result = '';
  for (let i = string.length - 1; i >= 0; i -= 1) {
    result += string[i];
  }
  return result;
}

/*
indexOf - Implement the indexOf function for arrays.
*/
function indexOf(arr, key) {
  for (let i; i <= arr.length; i += 1) {
    if (arr[i] === key) {
      return key;
    }
  }
  return -1;
}

/*
isPalindrome - Return true or false indicating whether the given string is a plaindrone
(case and space insensitive).
*/
function isPalindrome(string) {
  // eslint-disable-next-line
  string = string.split(' ').join('').toLowerCase();
  // string = string.replace(/ /g, '');
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false;
    }
  }
  return true;
}


function isPalindromeF(string) {
  // eslint-disable-next-line
  string = string.split(' ').join('').toLowerCase();
  const stringSecond = string.split('').reverse().join('');
  // let string_ = reverseStr(string);
  return string === stringSecond;
}

/*
missing - Takes an unsorted array of unique numbers (ie. no repeats)
from 1 through some number n, and returns the missing number
in the sequence (there are either no missing numbers,
or exactly one missing number).
*/

function missing(arr) {
  // eslint-disable-next-line
  let result = [];
  const maximum = Math.max(...arr);
  const minimum = Math.min(...arr);
  // let re = reduce(arr, (a,b) => Math.min(a,b));
  for (let i = minimum; i <= maximum; i += 1) {
    if (arr.indexOf(i) === -1) {
      result.push(i);
    }
  }
  return result;
}

/*
isBalanced - Takes a string and
returns true or false indicating whether its curly braces are balanced.
*/

function isBalanced(string) {
  let count = 0;
  // eslint-disable-next-line
  for( let item of string) {
    if (item === '{') {
      count += 1;
    }
    if (item === '}') {
      count -= 1;
    }
    if (count < 0) {
      return false;
    }
  }
  return count === 0;
}

/*
  Tests
*/

test(t => t.is(factorial(0), 1));
test(t => t.is(factorial(1), 1));
test(t => t.is(factorial(6), 720));
test(t => t.is(fib(0), 0));
test(t => t.is(fib(1), 1));
test(t => t.is(fib(10), 55));
test(t => t.is(fib(20), 6765));
test(t => t.is(fibRec(0), 0));
test(t => t.is(fibRec(1), 1));
test(t => t.is(fibRec(10), 55));
test(t => t.is(fibRec(20), 6765));
test(t => t.deepEqual(filter([1, 2, 3, 4], n => n < 3), [1, 2]));
test(t => t.is(indexOf([1, 2, 3], 1), 0));
test(t => t.is(indexOf([1, 2, 3], 4), -1));
test(t => t.is(isBalanced('}{'), false));
test(t => t.is(isBalanced('{{}'), false));
test(t => t.is(isBalanced('{}{}'), true));
test(t => t.is(isBalanced('foo { bar { baz } boo }'), true));
test(t => t.is(isBalanced('foo { bar { baz }'), false));
test(t => t.is(isBalanced('foo { bar } }'), false));
test(t => t.is(isPalindrome(''), true));
test(t => t.is(isPalindrome('abcdcba'), true));
test(t => t.is(isPalindrome('abcd'), false));
test(t => t.is(isPalindrome('A man a plan a canal Panama'), true));
test(t => t.is(isPalindromeF(''), true));
test(t => t.is(isPalindromeF('abcdcba'), true));
test(t => t.is(isPalindromeF('abcd'), false));
test(t => t.is(isPalindromeF('A man a plan a canal Panama'), true));
test(t => t.is(isPrime(0), false));
test(t => t.is(isPrime(1), false));
test(t => t.is(isPrime(9), false));
test(t => t.is(isPrime(17), true));
test(t => t.is(isPrime(25), false));
test(t => t.is(isPrime(73), true));
test(t => t.is(isPrime(10000000000000), false));
test(t => t.is(isSorted([]), true));
test(t => t.is(isSorted([-Infinity, -5, 0, 3, 9]), true));
test(t => t.is(isSorted([3, 9, -3, 10]), false));
test(t => t.is(missing([]), undefined));
test(t => t.is(missing([1, 4, 3]), 2));
test(t => t.is(missing([2, 3, 4]), 1));
test(t => t.is(missing([5, 1, 4, 2]), 3));
test(t => t.is(missing([1, 2, 3, 4]), undefined));
test(t => t.is(reduce([1, 2, 3, 4], (a, b) => a + b, 0), 10));
test(t => t.is(reverseStr(''), ''));
test(t => t.is(reverseStr('abcdef'), 'fedcba'));
