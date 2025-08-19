/*
Given an integer N, return the sum of first N natural numbers. Try to solve this using recursion.
Input : N = 4
Output : 10
Input : N = 2
Output : 3
Constraints:
1 <= N <= 10**3



Time complexity:O(N),S.C is O(N) for  N recursive calls in stack.
*/

function NnumbersSum(N) {
        //solved on Own
         if(N==1){
            return 1;
         }
        return N+NnumbersSum(N-1); //15
    }
    console.log(NnumbersSum(5));

    function TailNnumbersSum(N,sum) {
        //solve on own
         if(N==0){
            return sum ;
         }
        return TailNnumbersSum(N-1,sum+N);
    }
    console.log(TailNnumbersSum(5,0));//15