/*
Given a number with n digits, return the palindrome
with 2n digits, the first n of which are the original number

The input can be either an integer or a string of digits.
Write your function such that the return always has the same data type as the input.
*/
function makePalindrome(num) {
    var arr = num.split('');
    var reversedArr = arr.slice();
    reversedArr.reverse();
    var paliArr = arr.concat(reversedArr);
    return paliArr.join('');
}
// console.log(makePalindrome(12345))
console.log(makePalindrome('12345'));
