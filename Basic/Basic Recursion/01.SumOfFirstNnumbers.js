/*
Given an integer N, return the sum of first N natural numbers. Try to solve this using recursion.
Input : N = 4
Output : 10
Input : N = 2
Output : 3
Constraints:
1 <= N <= 10**3
*/
function NnumbersSum(N) {
        //your code goes here
         if(N==1){
            return 1;
         }
        return N+this.NnumbersSum(N-1);
    }