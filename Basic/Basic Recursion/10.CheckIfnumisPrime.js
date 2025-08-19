/*
Given an integer num, return true if it is prime otherwise false.
A prime number is a number that is divisible only by 1 and itself.
Input : num = 5
Output : true
Input : num = 15 Output : false
Constraints:
1 <= num <= 10**4
*/
//T.C is O(sqrt(n)),space complexity is O(sqrt(n));where n is input num.

class Solution {
  checkPrime(num, i = 2) {
    //solved on own in revision
    if (num == 0 || num == 1) {
      return false;
    }
    if (i * i > num) {
      return true;
    }
    if (num % i == 0) {
      return false;
    }
    return this.checkPrime(num, i + 1);
  }
}
const solution = new Solution();
const num = 7;  
const result = solution.checkPrime(num); 
console.log(result);  //true
