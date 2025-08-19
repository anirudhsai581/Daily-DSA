/*

Given an integer n, return the factorial of n.

Factorial of a non-negative integer, is the multiplication of all integers smaller than or equal to n (use 64-bits to return answer).
Constraints:
0 <= n <= 15

T.C is O(n), S.C is O(n)
*/

class Solution {
    factorial(n) {
        if(n==0){
            return 1;
        }
        //your code goes here
        return n*this.factorial(n-1)
    }
}

const solution = new Solution();
const N = 5; // Example input
console.log(`Factorial of ${N} is ${solution.factorial(N)}`);//Factorial of 5 is 120