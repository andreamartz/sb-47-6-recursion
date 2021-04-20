/** product: calculate the product of an array of numbers. */

function product(nums, idx = 0) {
  // base case
  if (idx === nums.length) return 1;

  // normal case
  return nums[idx] * product(nums, idx + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx = 0, maxLength = 0) {
  // base case
  if (idx === words.length) return maxLength;

  // normal case
  maxLength = Math.max(words[idx].length, maxLength);
  return longest(words, idx + 1, maxLength);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 0, newStr = "") {
  // base case
  if (idx > str.length - 1) return newStr;

  // normal case
  newStr += (str[idx]);
  return everyOther(str, idx + 2, newStr);
}

/** isPalindrome: checks whether a string is a palindrome or not. */
// inputs: str, first = 0, last = str.length - 1, result = true

function isPalindrome(str, first = 0, last = str.length - 1, result = true) {
  // base case
  if (first > last || result === false) return result;

  // normal case
  if (str[first] === str[last]) {
    console.log(first, last, "FIRST === LAST?: ", str[first] === str[last]);
  } else {
    result = false;
  }
  return isPalindrome(str, first + 1, last - 1, result);
}

/** isPalindrome solution code is elegant: */
// function isPalindrome(str, idx = 0) {
//   let leftIdx = idx;
//   let rightIdx = str.length - idx - 1;
//   if (leftIdx >= rightIdx) return true;
//   if (str[leftIdx] !== str[rightIdx]) return false;
//   return isPalindrome(str, idx + 1);
// }


/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  // base case
  if (idx === arr.length) return -1;

  // normal case
  if (arr[idx] === val) return idx;
  return findIndex(arr, val, idx + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx = str.length - 1, revStr="") {
  // base case
    // when idx < 0, stop and return reversed
  if (idx < 0) return revStr;

  // normal case
    // remove the current char (idx) into the reversed array
    // decrement idx
    // call the fcn again
  revStr += str[idx];
  idx -= 1;
  return revString(str, idx, revStr);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  const arr = [];
  // normal case
    // loop through the object's keys (for...in)
      // for each key:
        // if string, push it onto arr
        // if object, call the fcn again
  for (key in obj) {
    if (typeof obj[key] === 'string') arr.push(obj[key]);
    if (typeof obj[key] === 'object') arr.push(...gatherStrings(obj[key]));
  }

  // base case
  return arr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

// function binarySearch(arr, val, low = 0, high = arr.length - 1) {
//   if (val < arr[0] || val > arr[arr.length -1]) return -1;
  
//   let mid;
//   mid = mid || Math.floor((low + high) / 2);

//   // base case
//   if (arr[mid] === val) return mid;
  
//   // normal case
//   high = val < arr[mid] ? mid - 1 : high;
//   low = val > arr[mid] ? mid + 1 : low;
//   mid = Math.floor((low + high) / 2);
//   return binarySearch(arr, val, low, high);
// }

function binarySearch(arr, val, low = 0, high = arr.length - 1) {
  if (low > high) return -1;
  
  let mid = Math.floor((low + high) / 2);

  // base case
  if (arr[mid] === val) return mid;
  
  // normal case
  high = val < arr[mid] ? mid - 1 : high;
  low = val > arr[mid] ? mid + 1 : low;
  return binarySearch(arr, val, low, high, mid);
}

// console.log(product([1,2,3,4])); // 24
// console.log(everyOther("hello again"));
// console.log(isPalindrome("tacocat")); // true
// console.log(isPalindrome("a")); // true
// console.log(isPalindrome("total")); // false
// console.log(isPalindrome("racecar")); // true
// console.log(isPalindrome("rascar")); // false
// console.log(gatherStrings({
//   firstName: "Lester",
//   favoriteNumber: 22,
//   moreData: {
//     lastName: "Testowitz"
//   },
//   funFacts: {
//     moreStuff: {
//       anotherNumber: 100,
//       deeplyNestedString: {
//         almostThere: {
//           success: "you made it!"
//         }
//       }
//     },
//     favoriteString: "nice!"
//   }
// }));
console.log(binarySearch([1, 2, 3, 4], 4));

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
