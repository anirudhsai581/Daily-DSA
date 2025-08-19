/* 
The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the 
two preceding ones, starting from 0 and 1. That is,
F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).
Input : n = 2 Output : 1
Explanation : F(2) = F(1) + F(0) => 1 + 0 => 1.
Time Complexity O(2^N) — Each function call makes two more calls (for n-1 and n-2), resulting in an exponential growth in the number of calls.
Space Complexity O(N)— The call stack grows with each recursive call, using N stack frames, so the space complexity is proportional to the recursion depth.
*/
function fib(n){
        //solved on own in revision
        if(n==0 ||n==1){
            return n
        }
        return fib(n-1)+fib(n-2);
}
console.log(fib(6))//8