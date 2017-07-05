function isPrime(number) {
  if (number <= 1) {
    return fa
    lse; 
  }
  if (number == 2) {
    return true;
  }
  
  for(let i=2; i<=Math.sqrt(number); i+=1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}


function factorial(number) {
  return (number === 0 ? 1 : number * factorial(number - 1));
}


function fib(number) {
   x = 0;
   y = 1;
  for (let i=1; i<=number; i+=1) {
    y = x + y;
    x = y - x;
  }
  return x;
}

function fib_rec(number) {
  return (number === 0 ? 0 : number === 1 ? 1 : fib_rec(number - 1) + fib_rec(number - 2));
}

function isSorted(list) {
  if (list.length <= 1) {
    return true;
  }
  for (let i=1; i<=list.length; i+=1) {
    if (list[i] < list[i-1]) {
      return false;
    } 

  }
  return true;
}  

function filterArr(arr, filterBy) {
  let result = [];
  for (let item in arr) {
    filterBy(arr[item]) ? result.push(arr[item]) : null;
  }
  return result;
}

function reduce(arr, reduceBy, value) { 
  for (let i=0; i < arr.length; i+=1) {
    value = reduceBy(value, arr[i], i, arr); 
  } 
  return value; 
}

function reverseStr(string) {
  let result = '';
  for (let i=string.length-1; i>=0; i-=1) {
    result += string[i];
  }
  return result;
}

function isPalindrome(string) {
  string = string.split(' ').join('').toLowerCase();
  //string = string.replace(/ /g, '');
  for(let i=0; i<string.length; i+=1) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false;
    }
  }
  return true;
}


function isPalindromeF(string) {
  string = string.split(' ').join('').toLowerCase();
  let string_ = string.split('').reverse().join('');
  //let string_ = reverseStr(string);
  return string === string_;
}

function missing(arr) {
  let result = [];
  const maximum = Math.max(...arr);
  const minimum = Math.min(...arr);
  // let re = reduce(arr, (a,b) => Math.min(a,b));
  for (let i= minimum; i <= maximum; i+=1) {
    if (arr.indexOf(i) === -1) {
      result.push(i);
    }
  }
  return result;
}

function isBalanced(string) {
  let count = 0;
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