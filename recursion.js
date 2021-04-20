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
  newStr = newStr.concat(str[idx]);
  // console.log(newStr);
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

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  // base case

  // normal case

}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  // base case

  // normal case

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  // base case

  // normal case

}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
  // base case

  // normal case

}

// console.log(product([1,2,3,4])); // 24
// console.log(everyOther("hello again"));
// console.log(isPalindrome("tacocat")); // true
// console.log(isPalindrome("a")); // true
// console.log(isPalindrome("total")); // false
// console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("rascar")); // false

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
